const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
class PaymentController {
  async paymentProcess(req, res, next) {
    const { cart, id } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const orderData = cart.map((item) => {
      return {
        _id: item._id,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      };
    });
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: {
        cart: JSON.stringify(orderData),
      },
    });
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["PK", "IN", "BD"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
      ],
      line_items: cart.map((item) => {
        const percentage = item.discount / 100;
        let actualPrice = item.price - item.price * percentage;
        actualPrice = parseFloat(actualPrice);
        actualPrice = actualPrice * 100;
        actualPrice = actualPrice.toFixed(1);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount_decimal: actualPrice,
          },
          quantity: item.quantity,
        };
      }),
      customer: customer.id,
      mode: "payment",
      success_url: `${process.env.CLIENT}/user?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT}/cart`,
    });
    res.json({ url: session.url });
  }
  async checkOutSession(request, response) {
    const sig = request.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        request.rawBody,
        sig,
        process.env.ENDPOINTSECRET
      );
    } catch (err) {
      console.log(err.message);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;

        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      case "checkout.session.completed":
        const data = event.data.object;
        const customer = await stripe.customers.retrieve(data.customer);
        console.log("customer :", customer);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
}
module.exports = new PaymentController();
