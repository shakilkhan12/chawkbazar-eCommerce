const mongoose = require("mongoose")
const catgorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})
module.exports = mongoose.model("categorie", catgorySchema)