const mongoose= require('mongoose');

const StudentSch = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    max:50,
   },
   email:{
    type:String,
    required:true,
    max:50,
   },
   phn_no:{
    type:String,
    required:true
   },
   Type:{
    type:String,
    required:true,
   },
   Grad:{ type:String,required:true},
   Stream:{type:String,required:true}
   
});

module.exports= mongoose.model("Student",StudentSch);
