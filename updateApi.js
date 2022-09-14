// Importing the module
const express = require("express");
const mysqlconn = require('./config');
const app = express();
app.use(express.json());
// Creating express Router
const router = express.Router();

router.put("/updatedata/:id", (req, res, next) => {
    const data = [req.body.event_name, req.body.visitor, req.params.id];
    var sql = `UPDATE events SET event_name = ?,visitor =  ? WHERE id = ?`;
    mysqlconn.query(sql, data, function (err, result) {
        if (err) throw err;
        res.send("updated success");
    });

});
module.exports = router