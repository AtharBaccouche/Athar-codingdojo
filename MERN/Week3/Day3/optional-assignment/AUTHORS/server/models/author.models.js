const mongoose=require("mongoose")
const AuthorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,"{PATH} must have at least 3 chars, but you entred{VALUE}"]

    },
    books:[
        {
            title:{
                type:   String,
                required:true

            },
            numberOfPages:{
                type:Number,
                required:true
            }
        }
    ]
},{timestamps:true})
const  Author=mongoose.model("Author",AuthorSchema);
module.exports=Author;