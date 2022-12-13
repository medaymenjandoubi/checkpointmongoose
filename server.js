const express = require ('express')
const connectddb = require('./config/connectdb')
const ContactRouter = require('./routes/Contact')
const app = express()

const port = process.env.port

require('dotenv').config();
//link db

connectddb()


//partie routes
app.use(express.json()) 
app.use('/api/user',ContactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`you did it go to the port num : ${process.env.port}`)
})