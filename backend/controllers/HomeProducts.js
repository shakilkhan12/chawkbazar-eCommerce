const ProductModel = require("../models/ProductModel");
class HomeProducts {
  async catProducts(req, res) {
    const { name, page } = req.params;
    const perPage = 12;
    const skip = (page - 1) * perPage;
    try {
      const count = await ProductModel.find({
        category: name,
      })
        .where("stock")
        .gt(0)
        .countDocuments();
      const response = await ProductModel.find({ category: name })
        .where("stock")
        .gt(0)
        .skip(skip)
        .limit(perPage)
        .sort({ updatedAt: -1 });
      return res.status(200).json({ products: response, perPage, count });
    } catch (error) {
      console.log(error.message);
    }
  }
}
module.exports = new HomeProducts();
