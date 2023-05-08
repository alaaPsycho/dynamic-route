const { mongoose,model,Schema } = require("mongoose");

let actorSchema =new Schema({
    name:{
        type : String
    },
    age:{
        type : Number
    },
    url:{
        type : String
    }
})

let user = model('actors',actorSchema)

module.exports = user;