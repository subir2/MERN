const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv=require("dotenv");
const product = require("./routes/productRoute");
const mongoose = require("mongoose");
dotenv.config();

require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

app.use("/api/v1", product);
// const URI = process.env.MONGO_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true, 

// useUnifiedTopology: true 

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// })
 



app.listen(process.env.port,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)


})