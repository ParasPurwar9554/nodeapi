const express = require("express");
const path = require("path")
const multer = require('multer')
const mysqlconn = require('./config');
const app = express();
app.use(express.json());
const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        //console.log(file.originalname);
        // console.log(path.parse(file.originalname).ext); 
        cb(null, file.fieldname + "-" + Date.now() + path.parse(file.originalname).ext)
    }
});

const maxSize = 1 * 1000 * 1000;
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    /*    fileFilter: function (req, file, cb){
           var filetypes = /jpeg|jpg|png|pdf/;
           var mimetype = filetypes.test(file.mimetype);
           var extname = filetypes.test(path.extname(
                       file.originalname).toLowerCase());
           if (mimetype && extname) {
               return cb(null, true);
           }
           cb("Error: File upload only supports the "
                   + "following filetypes - " + filetypes);
         }  */
}).array("avatar");

router.post('/uploads', function (req, res, next) {

     upload(req, res, function (err) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(req.files)
        }
    }) 

});

module.exports = router