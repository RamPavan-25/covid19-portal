const mongoose=require('mongoose')

const dataSchema=new mongoose.Schema({
    countryName:{
        type:String,
        required:true
    },
    countryDescription:{
        type:String,
        required:true   
    },
    TotalCases:{
        type:Number,
        required:true
    },
    CasesCured:{
        type:Number,
        required:true
    },
    ActiveCases:{
        type:Number,
        required:true
    },
    Deaths:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Data=mongoose.model('Data',dataSchema)
module.exports=Data