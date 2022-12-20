const {addAuthor,findAllAuthor,findOneAuthor,updateAuthor,deleteAuthor,addBook} = require("../controllers/author.controllers")


module.exports = app => {
    app.post('/api/authors', addAuthor);
    app.get('/api/authors', findAllAuthor);
    app.get('/api/authors/:id',findOneAuthor);
    app.put('/api/authors/:id',updateAuthor);
    app.delete('/api/authors/:id',deleteAuthor);
    ///BOOK
    app.put('/api/authors/book/:id',addBook)
}