const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const movieRouter = require('./routes/movieController')


const url = 'mongodb+srv://RJrjmongo123:RJrjmongo123@cluster0.nizajtj.mongodb.net/';
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/movieController',movieRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
