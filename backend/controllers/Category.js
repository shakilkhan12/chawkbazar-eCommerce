const {validationResult} = require("express-validator")
const CatgoryModel = require("../models/Category")
class Category {
    async create(req, res) {
        const errors = validationResult(req);
        const {name} = req.body;
        if(errors.isEmpty()){
           const exist = await CatgoryModel.findOne({name});
           if(!exist) {
                await CatgoryModel.create({name})
                return res.status(201).json({message: 'Your category has created successfully!'})
           } else {
               return res.status(401).json({errors: [{msg: `${name} category is already exist`}]})
           }
        } else {
            return res.status(401).json({errors: errors.array()});
        }
    }
    async categories(req, res) {
         const page = req.params.page;
         const perPage = 3;
         const skip = (page - 1) * perPage;
         try {
             const count = await CatgoryModel.find({}).countDocuments();
             const response = await CatgoryModel.find({}).skip(skip).limit(perPage).sort({updatedAt: -1})
            return res.status(200).json({categories: response, perPage, count})
         } catch (error) {
             console.log(error.message);
         }

    }
}
module.exports = new Category;