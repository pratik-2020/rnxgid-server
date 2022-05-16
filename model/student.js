const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    registration_num: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;