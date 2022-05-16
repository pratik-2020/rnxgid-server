const mongoose = require('mongoose');

const studentModel = require('../../model/student');

const verifyStudent = (req, res) => {
    const reg_num = req.body.reg_num;
    studentModel.find({
        registration_num: reg_num
    }).then((response) => {
        if(response.length === 0){
            res.send('User not found');
        }
        else{
            res.send(response);
        }
    })
}

module.exports = verifyStudent;