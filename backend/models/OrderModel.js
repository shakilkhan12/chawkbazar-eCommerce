const { Schema, model, Types } = require("mongoose");
const orderSchema = Schema(
  {
    productId: { type: Types.ObjectId, ref: "product" },
    userId: { type: Types.ObjectId, ref: "user" },
    size: {
      required: false,
      type: String,
    },
    color: {
      required: false,
      type: String,
    },
    quantities: {
      required: true,
      type: Number,
    },
    address: {
      required: true,
      type: Map,
    },
    status: {
      default: false,
      type: Boolean,
    },
    received: {
      default: false,
      type: Boolean,
    },
    review: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);
const OrderModel = model("order", orderSchema);
module.exports = OrderModel;
