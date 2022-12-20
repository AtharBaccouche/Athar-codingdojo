const Note = require("../models/note.models")
module.exports.findAllNote = (req, res) => {
    Note.find()
        .then((allNote) => {
            res.json(allNote) // what it returns will be recieved in react
        })
        .catch(err => {
            res.json({ message: "Something went worng", serverError: err })
        })
}

module.exports.createNote = (request, response) => {
    Note.create(request.body)
        .then(newCreatedNote => {
            response.json({ note: newCreatedNote })
        })
        .catch(err => {response.status(400).json(err)})
}

module.exports.findOneNote = (req, res) => {
    Note.findOne({ _id: req.params.id })
        .then(note => {
            res.json({ note })
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateExistingNote = (req, res) => {
    Note.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNote => res.json({ note: updatedNote }))
        .catch(err => {res.status(400).json(err)});
}

module.exports.deleteAnExistingNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}