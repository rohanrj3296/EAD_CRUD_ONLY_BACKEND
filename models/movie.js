const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    theme:
    {
        type: String,
        required: true
    },
    documentary: 
   {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('movie',movieSchema)




