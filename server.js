const express = require('express')
const mongoose = require('mongoose')
const verifyStudent = require('./routes/student/verify-student');
const addStudent = require('./routes/student/add-student');
const cors = require('cors')
const argv = require('yargs').argv;
const fileUpload = require('express-fileupload');
const db = 'mongodb+srv://Pratik:Pratik@cluster0.piw6f.mongodb.net/restaurant-app?retryWrites=true&w=majority'
const app = express()
app.use(fileUpload({
    useTempFiles: true
}));
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful!!!');
})
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ]
  };
app.use(cors(corsOpts));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello!!!")
});
app.post('/check', (req, res) => {
    verifyStudent(req, res);
});
app.post('/addstud', (req, res) => {
    addStudent(req, res);
})
const pt = argv.port || 3001;
app.listen( pt, () => {
    console.log("Listening at "+pt+"!!");
});