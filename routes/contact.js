const express = require('express')
const ContactRouter = express.Router()

// const ContactSchema = require('../model/Contact')

const {GetContact,AddUser,UpdateUser,DeleteUser,GetaUser} = require('../controllers/contact')

// route get all users


ContactRouter.get('/',GetContact)

// route post a user

ContactRouter.post('/adduser',AddUser)


//route put or update a user

ContactRouter.put('/:id',UpdateUser)


// route delete a user


ContactRouter.delete('/:id',DeleteUser)

//route get a user by id
ContactRouter.get('/:id',GetaUser)
    



module.exports = ContactRouter