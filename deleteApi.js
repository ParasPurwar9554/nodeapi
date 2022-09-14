// Importing the module
const express = require("express");
const mysqlconn = require('./config');
const app = express();
app.use(express.json());
// Creating express Router
const router = express.Router();

router.delete("/deletedata/:id", (req, res, next) => {
    const id =  req.params.id;
    var sql = `DELETE FROM events WHERE id = ${id}`;
    mysqlconn.query(sql, function (err, result) {
        if (err) throw err;
        res.send("deleted success");
    });

});
module.exports = router