const express=require('express')
const mongoose=require('mongoose')
const connectDB=require('./config/db')
const dotenv=require('dotenv').config()
const cors=require('cors')
const helmet=require('helmet')

connectDB()
const app=express()
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cors({
    origin:`${process.env.CLIENT_URL}`,
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))
//routes
app.use('/country',require('./routes/countryRouter'))

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})