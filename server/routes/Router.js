const express = require("express");
const Controller = require("./../controller/Controler");
const router = express.Router();

router.post("/api/register", Controller.postuser);
//getuser

router.get("/api/get", Controller.finduser);
router.get("/api/singleuser/:id", Controller.findid);

router.delete("/api/delete/:id", Controller.deletuser);
router.put("/api/update/:id", Controller.updateid);

module.exports = router;
