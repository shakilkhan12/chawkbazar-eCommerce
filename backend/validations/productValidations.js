const {body} = require("express-validator");
module.exports = [body('title').not().isEmpty().trim().escape().withMessage('title is required'),
body('price').custom((value) => {
    if(parseInt(value) < 1) {
        throw new Error('Price should be above $1');
    } else {
        return parseInt(value);
    }
}).trim().escape(),
body('discount').custom((value) => {
   if(parseInt(value) < 0) {
    throw new Error('Discount must not be negative');
   } else {
    return parseInt(value);
   }
}).trim().escape(),
body('category').not().isEmpty().trim().escape().withMessage('category is required'),
body('description').not().isEmpty().trim().escape().withMessage('description is required'),
body('stock').custom((value) => {
   if(parseInt(value) < 20) {
     throw new Error('Stock must be above 20');
   } else {
    return parseInt(value);
   }
}).trim().escape()
]