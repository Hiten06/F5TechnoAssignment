const mongoose = require('mongoose');

const TeacherSch = new mongoose.Schema({
      name:{
        type:String,
        required:true,
        max:50,
        unique:true,
      },
      subject:{
        type:String,
        required:true,
        max:50,
        
      },
      phn_no:{
        type:String,
        required:true,
      },
      Type:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
        max:50,
      }
});

module.exports = mongoose.model("Teacher",TeacherSch);