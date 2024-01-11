
import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const treeSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true })



app.use(cors())
app.use(express.json())


const Trees = mongoose.model('trees', treeSchema);


//Get All Users

app.get('/trees', async (req, res) => {
    try {
        const trees = await Trees.find({})
        res.send(trees)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




//Get by Id

app.get('/trees/:id', async (req, res) => {
    try {
        const trees = await Trees.findById(req.params.id)
        res.send(trees)
    } catch (error) {
        res.status(500).json({ message: error })
    }



})



//Add user

app.post('/trees', (req, res) => {
    const tree = new Trees({
        name: req.body.name,
        price: req.body.price
    })
    tree.save()
    res.send({ message: "Trees created" })
})


//Delete User
app.delete('/trees/:id', async (req, res) => {
    try {
        const trees = await Trees.findByIdAndDelete(req.params.id)
        res.status(500).json({ message: "Trees Deleted" })
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