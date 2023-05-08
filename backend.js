let express = require('express')

let app = express()
let cors = require('cors')
app.use(cors())

let db = require('mongoose')
    try{
        db.connect(`mongodb+srv://taharAlaa:WbKIfpMha07kC8IQ@cluster0.hmlvtlk.mongodb.net/selebrity?retryWrites=true&w=majority`)
    console.log('connected!')
    }catch(err){console.log(err)}

let actor = require("./models/actor")

app.get('/actors',async(req,res)=>{
    let actors = await actor.find()
    res.json(actors)
})
app.get('/actors/:id',async(req,res)=>{
    let {id}= req.params
    let actr = await actor.findById(id)
    res.json(actr)
})
app.listen(3001,()=>{
    console.log('run!')
})