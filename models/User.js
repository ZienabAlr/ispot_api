const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    firstname: String,
    surname: String,
    email: String,
    school: String,
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);