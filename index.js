const express = require('express');
const path = require("path")
const multer = require('multer')
const getApi = require("./getApi");
const saveApi = require("./insertApi");
const updateApi = require("./updateApi");
const deleteApi = require("./deleteApi");
const fileUploadApi = require("./uploadfile");
const app = express();
app.use(express.json());

app.use("/", getApi);
app.use("/", saveApi);
app.use("/", updateApi);
app.use("/", deleteApi);
app.use("/", fileUploadApi);

app.listen(5000);