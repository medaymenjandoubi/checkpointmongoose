const ContactSchema = require('../model/Contact')



//get all user
exports.GetContact = async(req,res)=>{
    try{
    const Contacts = await ContactSchema .find()
    res.status(200).send({msg:'this is the users list' , Contacts})
    }catch(err){
    res.status(500).send('you have no user to get')
    }
    }


    //post a user
    exports.AddUser = async(req,res)=>{
        try{
        const NewContact = await new ContactSchema(req.body)
        NewContact.save()
        res.status(200).send({msg:'you did it , the contact is added', NewContact})
        }catch(err){
            console.log(err)
            res.status(500).send('could not add a user ')
        }
            
        }


        //update user

        exports.UpdateUser = async(req,res)=>{
            try{
                const {id} = req.params
                const userUpdate = await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
                res.status(200).send('the user is updated')
            }catch{
                res.status(500).send('you could not update it')
            }
        }

        //delete user 

        exports.DeleteUser = async(req,res)=>{
            try{
              const {id} = req.params
              const deleteUser = await ContactSchema.findByIdAndDelete(id)
              res.status(200).send('you did it')
            }catch(err){
              res.status(500).send('could not delete it')
            }  
          }

          //get a single user
          exports.GetaUser = async(req,res)=>{
            try{
                const {id} = req.params
                const getuser = await ContactSchema.findById(id)
                res.status(200).send({msg:'this is the user you asked for',getuser})
              }catch(err){
                res.status(500).send('could not delete it')
              }  
            }