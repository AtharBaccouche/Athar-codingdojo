const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
        minlength: [10, "{PATH} must have at least 10 chars, but you entered {VALUE}"]
    },
    punchline: {
        type: String,
        required: true,
        minlength: [3, "{PATH} must have at least 3 chars, but you entered {VALUE}"]
    }
}, { timestamps: true })

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
