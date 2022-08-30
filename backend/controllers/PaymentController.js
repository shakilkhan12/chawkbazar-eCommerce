const formatCurrency = require("format-currency");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../models/User");
class PaymentController {
  async paymentProcess(req, res) {
    const { cart, id } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["PK", "IN", "BD"],
      },
      customer_email: user.email,
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

      mode: "payment",
      success_url: `${process.env.CLIENT}/user`,
      cancel_url: `${process.env.CLIENT}/cart`,
    });

    res.json({ url: session.url });
  }
}
module.exports = new PaymentController();
