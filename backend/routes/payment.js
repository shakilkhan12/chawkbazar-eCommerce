const { Router } = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = Router();
router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT}`,
    cancel_url: `${process.env.CLIENT}/cart`,
  });

  res.json({ url: session.url });
});
module.exports = router;
