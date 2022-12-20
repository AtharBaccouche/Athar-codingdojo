const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000
const DB_NAME = "jokes"

//MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./server/config/mongoose.config");
// ---------------------------------------
// import the routes ------------------------------------------------

// This is where we import the joke routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);



// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })