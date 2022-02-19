const mongoose = require("mongoose")
const catgorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = mongoose.model("categorie", catgorySchema)