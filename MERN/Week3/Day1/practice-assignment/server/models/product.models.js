const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
{
    title: {
        type: String,
        require: [true, 'Name is required'],
        minlength: [3, 'Name must be 3 characters at least.'],
    },
    price:{
        type:Number,
        require:[true,'price is required'],
    },
    description:{
        type:String,
        require:[true,'description is required']
    }

    

},
{ timestamps: true }
);

module.exports.Product = mongoose.model('Product', ProductSchema);
