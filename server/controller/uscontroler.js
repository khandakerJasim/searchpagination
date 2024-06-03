const us = require("./../model/useschema");
const moment = require("moment");

exports.postdata = async (req, res) => {
  const file = req.file.filename;
  const { fname, lname, email, phone, status, gender, location } = req.body;
  try {
    const preuser = await us.findOne({ email: email });
    if (preuser) {
      res.status(400).json("the user is alreday exits");
    } else {
      const datacreated = moment(new Date()).format("YYYY-MM-DD mm:hh:ss");
      const newuser = await us({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        gender: gender,
        status: status,
        profile: file,
        location: location,
        datacreated,
      });
      const saveuser = await newuser.save();
      res.status(200).json(saveuser);
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};
