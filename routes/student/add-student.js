const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const studentModel = require('../../model/student');
cloudinary.config({ 
    cloud_name: 'ddcituqpc', 
    api_key: '575793552761264', 
    api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
    secure: true
});
// const encryption = (str) => {
//     let encr = "";
//     for(let i=0;i<str.length(); i++){
//         if(i%2 == 0){
//             encr = encr + str[i]
//         }
//     }
//     for(let i=0;i<str.length(); i++){
//         if(i%2 == 1){
//             encr = encr + str[i]
//         }
//     }
//     return encr
// }
const addStudent = (req, res) => {
    const reg_num = req.body.reg_num;
    const name = req.body.name;
    const img = req.files.img;
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
    console.log(encr)
    cloudinary.uploader.upload(img.tempFilePath, (err, rslt) => {
        if(err){
            res.send(err.message);
        }
        else{
            let studentm = new studentModel();
            studentm.name = name;
            studentm.registration_num = encr;
            studentm.url = rslt.url
            // studentModel.reg = encr
            studentm.save((err, data) => {
                if(err){
                    res.send(err.message);
                }
                else{
                    res.send('Student Added!!!');
                }
            });
        }
    })
}

module.exports = addStudent;