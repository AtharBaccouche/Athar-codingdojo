//import mongoose 
const mongoose=require("mongoose")

const NoteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        minlength:[3,"{PATH} must have at least 3 chars"]

    },
    content: {
        type: String,
        required: [true,'content is required']
    },
    is_important: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Note = mongoose.model("Note", NoteSchema);
