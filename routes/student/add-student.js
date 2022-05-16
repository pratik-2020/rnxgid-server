const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const studentModel = require('../../model/student');
cloudinary.config({ 
    cloud_name: 'ddcituqpc', 
    api_key: '575793552761264', 
    api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
    secure: true
});
const addStudent = (req, res) => {
    const reg_num = req.body.reg_num;
    const name = req.body.name;
    const img = req.files.img;
    cloudinary.uploader.upload(img.tempFilePath, (err, rslt) => {
        if(err){
            res.send(err.message);
        }
        else{
            let studentm = new studentModel();
            studentm.name = name;
            studentm.registration_num = reg_num;
            studentm.url = rslt.url
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