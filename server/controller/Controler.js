const Sp = require("./../model/Spschema");
const moment = require("moment");

//register

exports.postuser = async (req, res) => {
  const { name, fname, email, mobile, status, location } = req.body;
  try {
    const preuser = await Sp.findOne({ email: email });
    if (preuser) {
      res.status(400).json({ mess: "The user is already exits" });
    } else {
      const datecreated = moment(new Date()).format("YYYY-MM-D hh:mm:ss");
      const newuser = await Sp({
        name: name,
        fname: fname,
        email: email,
        mobile: mobile,
        status: status,
        location: location,
        datecreated,
      });

      const saveuser = await newuser.save();
      res.status(200).json({ status: 200, saveuser });
    }
  } catch (error) {
    res.status(400).json(error);
    console.log("error", error);
  }
};

//find user all

exports.finduser = async (req, res) => {
  // const search = req.query.search || "";
  //const gender = req.query.gender || "";
  //const status = req.query.status || "";
  //const sort = req.query.sort || "";
  // const page = req.query.page || 1;
  // const data_perpage = 5;
  // const query = {
  //   name: {
  //     $regex: search,
  //     $options: "i",
  //   },
  // };
  // if (gender !== "All") {
  //   query.gender = gender;
  // }
  // if (status !== "All") {
  //   query.status = status;
  // }

  try {
    // const skip = (page - 1) * data_perpage; //1-1=0*4=0 2-1=1*4=4 3-1=2*4=8
    // console.log(req.query);
    // const count = await Sp.countDocuments(query);
    // const pagecount = Math.ceil(count / data_perpage); //12/4=3

    const alluser = await Sp.find();
    // .sort({ datecreated: sort == "new" ? -1 : 1 })
    // .limit(data_perpage)
    // .skip(skip);
    res.status(200).json(alluser);
  } catch (error) {
    res.status(400).json(error);
    console.log("error", error);
  }
};

//findbyid
exports.findid = async (req, res) => {
  const { id } = req.params;
  try {
    const iduser = await Sp.findById({ _id: id });
    res.status(200).json(iduser);
  } catch (error) {
    res.status(400).json(error);
    console.log("error", error);
  }
};

//deleteuser
exports.deletuser = async (req, res) => {
  const { id } = req.params;
  try {
    const removeuser = await Sp.findByIdAndDelete({ _id: id });
    res.status(200).json(removeuser);
  } catch (error) {
    res.status(400).json(error);
    console.log("error", error);
  }
};

//update user

exports.updateid = async (req, res) => {
  const { name, fname, email, mobile, status, location } = req.body;
  const { id } = req.params;
  try {
    const updateuser = await Sp.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        fname: fname,
        email: email,
        mobile: mobile,
        status: status,
        location: location,
      },
      {
        new: true,
      }
    );
    const newuser = await updateuser.save();
    res.status(200).json(newuser);
  } catch (error) {
    res.status(400).json(error);
    console.log("error", error);
  }
};
