
const noteController = require("../controllers/note.controllers")


module.exports = app => {
    app.get('/api/note', noteController.findAllNote);
    app.post('/api/note', noteController.createNote);
    app.get('/api/note/:id', noteController.findOneNote);
    app.put('/api/note/:id', noteController.updateExistingNote);
    app.delete('/api/note/:id', noteController.deleteAnExistingNote);
    

}