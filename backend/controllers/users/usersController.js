const {validationResult} = require("express-validator");
module.exports.register = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array());
    } else {
        console.log(req.body);
    }
}