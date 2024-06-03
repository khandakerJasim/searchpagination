const mongoose = require("mongoose");
const validator = require("email-validator");

//create schema

const userschema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
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
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enums: ["Active", "Inactive"],
    default: "Active",
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  datecreate: {
    type: String,
  },
  dateupdated: {
    type: String,
  },
});

//create model

const us = new mongoose.model("uservalidation", userschema);

module.exports = us;
