
import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const wordSchema = new Schema({
    image:{type:String,required:true},
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true })





const Words = mongoose.model('Words', wordSchema);


//Get All Users

app.get('/words', async (req, res) => {
    try {
        const words= await Words.find({})
        res.send(words)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




//Get by Id

app.get('/words/:id', async (req, res) => {
    try {
        const words = await Words.findById(req.params.id)
        res.send(words)
    } catch (error) {
        res.status(500).json({ message: error })
    }



})



//Add user

app.post('/words', async(req, res) => {
   try {
    const word = new Words({
        image:req.body.image,
        name: req.body.name,
        price: req.body.price
    })
    await word.save()
    
    res.send({ message: "Words created" })
   } catch (error) {
    res.status(500).json({ message: error })
   }
})


//Delete User
app.delete('/words/:id', async (req, res) => {
    try {
        const words = await Words.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Words Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Connected db"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log("Server Connection")
})