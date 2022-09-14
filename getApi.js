// Importing the module
const express = require("express");
const mysqlconn = require('./config');

// Creating express Router
const router = express.Router()

router.get("/getdata", (req, res, next) => {
    mysqlconn.query("SELECT * FROM events", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });

})

module.exports = router