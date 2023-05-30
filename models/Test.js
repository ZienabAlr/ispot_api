const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testSchema = new Schema({
    url: String,
    meaning: String,
   
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;