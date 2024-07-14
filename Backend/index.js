const express=require("express")
const app=express();
const config=require("./config");
const port=config.PORT;
const modelschema=require("./Models/Bookmodel")
const mongoose=require("mongoose")
const cors=require("cors");
const allroute=require("./route/Allroutes")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use('/book',allroute)
mongoose.connect(config.mongourl).then(()=>{
    console.log("Database connected")
    app.listen(port,(req,res)=>{
       console.log("Server listen at port",port);
    })
}).catch((error)=>{
    console.log("error in data base connection")
})
