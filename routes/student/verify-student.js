const mongoose = require('mongoose');

const studentModel = require('../../model/student');
const decryption = (str) => {
    let encr = "";
    const d = str.length
    if(d%2 === 0){
        let i = 0, j = parseInt(d/2);
        while(i < parseInt(d/2) && j < d){
            encr = encr + str[i] + str[j];
        }
    }
    else{
        let i = 0, j = parseInt(d/2)+1;
        while(i < parseInt(d/2) && j < d){
            encr = encr + str[i] + str[j];
        }
    }
    return encr
}
const verifyStudent = (req, res) => {
    const reg_num = req.body.reg_num;
    let encr = "";
    for(let i=0;i<reg_num.length; i++){
        if(i%2 == 0){
            encr = encr + reg_num[i]
        }
    }
    for(let i=0;i<reg_num.length; i++){
        if(i%2 == 1){
            encr = encr + reg_num[i]
        }
    }
    studentModel.find({
        registration_num: encr
    }).then((response) => {
        if(response.length === 0){
            res.send('User not found');
        }
        else{
            res.send([{
                name: response[0].name,
                registration_num : reg_num,
                url : response[0].url
            }]);
        }
    })
}

module.exports = verifyStudent;