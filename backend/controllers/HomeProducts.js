const ProductModel = require("../models/ProductModel");
class HomeProducts {
  async catProducts(req, res) {
    const { name, page, keyword } = req.params;
    const perPage = 12;
    const skip = (page - 1) * perPage;
    const options = name
      ? { category: name }
      : keyword && { title: { $regex: `${keyword}`, $options: "i" } };
    if (page) {
      try {
        const count = await ProductModel.find({
          ...options,
        })
          .where("stock")
          .gt(0)
          .countDocuments();
        const response = await ProductModel.find({ ...options })
          .where("stock")
          .gt(0)
          .skip(skip)
          .limit(perPage)
          .sort({ updatedAt: -1 });
        return res.status(200).json({ products: response, perPage, count });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const response = await ProductModel.find({ ...options })
        .where("stock")
        .gt(0)
        .limit(4)
        .sort({ updatedAt: -1 });
      return res.status(200).json({ products: response });
    }
  }
}
module.exports = new HomeProducts();
