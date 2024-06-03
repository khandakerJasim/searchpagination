const express = require("express");
const uscontroler = require("./../controller/uscontroler");
const upload = require("./../storage/Storageconfig");
const router = express.Router();

//router
router.post("/api/post1", upload.single("profile"), uscontroler.postdata);

module.exports = router;
