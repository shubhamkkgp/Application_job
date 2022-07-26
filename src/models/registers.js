const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required:true
  },
  lastname: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  phone:{
    type: Number,
    required:true,
    unique:true 
  },
  qualifications: {
    type: String,
    required:true
  },
  availability: {
    type: String,
    required:true
  },
  q1: {
    type: String,
    required:true
  },
  q2: {
    type: String,
    required:true 
  },
  password: {
    type: String,
    required:true
  }
})

const Submit = new mongoose.model("Submit",employeeSchema);

module.exports = Submit;