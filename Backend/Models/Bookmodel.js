const mongoose=require('mongoose')
const modelschema=mongoose.Schema(
    {
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    pbyear:{
        type:Number,
        require:true,
    }
},{
    timestamps:true
})
module.exports=mongoose.model('book',modelschema)