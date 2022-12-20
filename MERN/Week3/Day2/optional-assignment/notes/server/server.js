const express=require("express")
const app=express()
const cors=require("cors")
const PORT=8000
const DB_Name="notes"
//mIDDLEWERE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
//connect to the DB
require("./config/mongoose.config")(DB_Name)

require("./routes/note.routes")(app)
///
app.listen(PORT,()=>{console.log(`server started on PORT ${PORT}`)})