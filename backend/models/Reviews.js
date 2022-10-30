const { Schema, model, Types } = require("mongoose");
const reviewsSchema = Schema(
  {
    rating: {
      type: Number,
      default: 1,
    },
    comment: {
      type: String,
    },
    product: { type: Types.ObjectId, ref: "product" },
    user: { type: Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);
module.exports = model("review", reviewsSchema);
