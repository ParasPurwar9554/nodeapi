// Importing the module
const express = require("express");
const mysqlconn = require('./config');
const app = express();
app.use(express.json());
// Creating express Router
const router = express.Router()

router.post("/savedata", (req, res, next) => {
    var sql = `INSERT INTO events (event_name, visitor, properties, browser) VALUES ('${req.body.event_name}',${req.body.visitor},'${req.body.properties}','${req.body.browser}')`;
    mysqlconn.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Record inserted");
    });

});

module.exports = router