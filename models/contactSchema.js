const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
