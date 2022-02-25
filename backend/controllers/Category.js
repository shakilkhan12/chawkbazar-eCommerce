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
}
module.exports = new Category;