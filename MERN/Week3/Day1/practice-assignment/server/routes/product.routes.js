const {addProduct,getAllProduct,getOneProduct, updateProduct,deleteProduct} = require('../contollers/product.controllers');
module.exports = (app) => {
    app.post('/api/product', addProduct);
    app.get('/api/product', getAllProduct);
    app.get('/api/product/:id', getOneProduct);
    app.put('/api/product/:id', updateProduct);
    app.delete('/api/product/:id', deleteProduct);
  };