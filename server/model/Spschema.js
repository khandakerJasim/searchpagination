const mongoose = require("mongoose");
const validator = require("email-validator");

//crete schema

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      minlength: 11,
      maxlength: 11,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    location: {
      type: String,
      required: true,
    },
    datecreated: {
      type: String,
    },
  }
  //{ timestamps: true }
);

//createusermodel

const Sp = new mongoose.model("search", userschema);

module.exports = Sp;
