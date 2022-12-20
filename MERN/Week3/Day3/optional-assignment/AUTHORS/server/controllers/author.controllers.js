const Author=require('../models/author.models')

//ADD NEW AUTHOR
module.exports.addAuthor = (request, response) => {
    Author.create(request.body)
        .then((author) => response.json( author ))
        .catch((err) => response.status(400).json( err ))
    }


//get alll authors
module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors) // what it returns will be recieved in react
        })
        .catch(err => {
            res.json(err)
        })
}
/////find by id
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.json(oneAuthor )
        })
        .catch(err => response.json(err))
}
/////UPDATE

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ updatedAuthor }))
        .catch(err => res.json(err));
}
//////DELETTE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({  result }))
        .catch(err => res.json(err));
}
module.exports.addBook=(req,res)=>{
    Author.findOneAndUpdate({_id:req.params.id},{$push:{books:req.body}}, {new:true,runValidators:true})
    .then (author=>res.json(author))
    .catch((err)=>res.status(400).json(err))
}