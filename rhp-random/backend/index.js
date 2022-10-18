const express= require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute= require("./routes/user")
// I deleted cors policy (open and can be accessed by any sites) .since it reduce my site sequrity.
mongoose
  .connect("mongodb+srv://Rahul:21022003@cluster0.tvmai5q.mongodb.net/?retryWrites=true&w=majority", {
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


app.use(express.json());
app.get("/",(req,res)=>{
  res.send("RHP RANDOM  Backend");
})

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);


app.listen(process.env.PORT || 8800, () => {
    console.log("Backend server is running!");
  });
