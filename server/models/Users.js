const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
});

const User = mongoose.model("User", Userschema);
module.exports = User;