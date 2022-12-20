const express=require("express")
const app=express()
const cors=require("cors")
const PORT=5000
const DB_Name="authors"
//mIDDLEWERE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

//connect to the DB
require("./config/mongoose.config")(DB_Name)
/// ROUTES
require("./routes/author.routes")(app)

///port
app.listen(PORT,()=>{console.log(`server started on PORT ${PORT}😂😁`)})