const mongoose = require('mongoose');

const studentModel = require('../../model/student');
const decryption = (str) => {
    let encr = "";
    for(let i=0;i<str.length; i++){
        if(i%2 == 0){
            encr = encr + str[i]
        }
    }
    for(let i=0;i<str.length; i++){
        if(i%2 == 1){
            encr = encr + str[i]
        }
    }
    return encr
}
const verifyStudent = (req, res) => {
    const reg_num = decryption(req.body.reg_num);
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