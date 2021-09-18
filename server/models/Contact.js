const mongoose = require('mongoose')

const Contactschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    streetNumber: {
        type: Number,
        required: true,
    },
});

const Contact = mongoose.model("Contact", Contactschema);
module.exports = {Contact : Contact, 
    ContactSchema : Contactschema}