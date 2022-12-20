const { Product } = require('../models/product.models');

// ADD NEW AUTHOR
module.exports.addProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json({ product }))
    .catch((err) => res.status(400).json(err));
};


module.exports.getAllProduct = (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};


module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};




module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => res.json({ product }))
    .catch((err) => res.status(400).json(err));
};

// DELETE AUTHOR
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json(err));
};



