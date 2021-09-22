const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const contact = require("./models/Contact")
const Contact = require('./models/Contact')
const { update } = require('./models/Contact')

const serverapp = express()
serverapp.use(express.json())
serverapp.use(cors())
serverapp.listen(3001, function(){
    console.log("Server listening at port 3001.......\n")
})


mongoose.connect('mongodb+srv://Sameer:Rordofthelings@crud.mgcsw.mongodb.net/contacts45?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/* contact.create({ firstname: 'Maxim', lastname: 'Mueller', street:"Berliner Straße", country: "Germany"  }, function (err) {
    if (err && err.name === 'ValidationError') {
        console.error(Object.values(err.errors).map(val => val.message))
      }
  }) */

serverapp.post('/create', function(req, res){
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const street = req.body.street
    const postalcode = req.body.postalcode
    const city = req.body.city
    const country = req.body.country

  /*   contact.create({ firstname: firstname, lastname: lastname, street:street, housenumber:housenumber, postalcode:postalcode, city:city, country: country}, 
        function (err) {
        if (err && err.name === 'ValidationError') {
            console.error(Object.values(err.errors).map(val => val.message))
          }
      })  */

     const contact = new Contact({firstname: firstname, lastname: lastname, street:street, postalcode:postalcode, city:city, country: country})

      try{
          contact.save();
          res.send("created information")
      }catch (err){
          console.log(err)
      } 
})

serverapp.get('/read', function(req, res){
    contact.find({}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    } )

})



serverapp.put('/update', function(req, res){
    const id = req.body.id
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const street = req.body.street
    const postalcode = req.body.postalcode
    const city = req.body.city
    const country = req.body.country

      try{
          Contact.findById(id, (err, updatedContact)=> {
              updatedContact.firstname = firstname
              updatedContact.lastname = lastname
              updatedContact.street = street
              updatedContact.postalcode = postalcode
              updatedContact.city = city
              updatedContact.country = country

              updatedContact.save();
              res.send("update")
         })
          
      }catch (err){
          console.log(err)
      } 
})


serverapp.delete('/delete/:id', function(req, res){
    const id = req.params.id
    res.send(id)

    Contact.findByIdAndRemove(id).exec()
    res.send("deleted")

})