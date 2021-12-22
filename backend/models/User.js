const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    admin: {
        required: true,
        type: Boolean,
        default: false
    }
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;