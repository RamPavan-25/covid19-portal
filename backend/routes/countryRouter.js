const express=require('express')
const router=express.Router()

const {getDataByCountry,getData}=require('../controllers/countryController')

router.get('/',getData)
router.get('/:id',getDataByCountry)

module.exports=router