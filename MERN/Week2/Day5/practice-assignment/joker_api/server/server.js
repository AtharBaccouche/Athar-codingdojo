const express = require("express")
const app = express()

const PORT = 8000
const DB_NAME = "jokes"

//MIDDLEWARE

app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME);
// ---------------------------------------
// import the routes ------------------------------------------------

// This is where we import the joke routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);



// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })