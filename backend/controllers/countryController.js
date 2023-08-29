const Data=require('../models/Data')

const getDataByCountry=async(req,res)=>{
    try {
        const {id}=req.params
        const data=await Data.find({_id:id})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
}

const getData=async(req,res)=>{
    try {
        const {name}=req.params
        const data=await Data.find({})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
}
module.exports={
    getDataByCountry,
    getData
}