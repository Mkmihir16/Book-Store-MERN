const modelschema=require("../Models/Bookmodel")
const express=require('express')
const router=express.Router();
router.get('/',async(req,res)=>{
    try{
        const allbooks= await modelschema.find();
        res.send(allbooks);
    }
    catch(error){
        res.send("Error in getting al books data")
    }
})
router.put("/:id",async(req,res)=>{
    const id=req.params.id;
        try{
               const obj=await modelschema.findOneAndUpdate({_id:id},req.body);
               if(!obj){
                res.send("Not found")
               }
               else{
                   res.send("Document updated succesfully")
               }
        }
        catch(error){
            res.send("Book cannot update due to technical error")
        }
    
})
router.get("/:id",async (req,res)=>{
    const id=req.params.id;
    try{
        const result=await modelschema.findById(id)
        if(!result){
            res.send("THIS ID OF BOOK IS NOT FOUND")
        }
        else{
            res.send(result)
            
        }
    }
    catch(error){
        console.log("error in finding a book");
        // res.send("error in finding a book")
    }
})
router.post("/",async (req,res)=>{
   try{
     
    if(!(req.body.title) || !(req.body.author) ||!(req.body.pbyear) ){
        console.log("Enter complete details of a user")
    }
    else{
       const newbook={
        title:req.body.title,
        author:req.body.author,
        pbyear:req.body.pbyear,
       }
       const book=await modelschema.create(newbook)
       res.send("Book created successfully");
    }
   }
   catch(e){
    res.send("error in creating a book")
   }
})
router.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    try{
       const result= await modelschema.findOneAndDelete({"_id":id})
       if(!result){
        return res.send("Book not found")
       }
       else{
        return res.send("Book deleted succesfull")
       }
    }
    catch(error){
        res.send("Error in deleting a book")
    }
})
module.exports= router