const studroute = require('express').Router();
const Student = require('../model/Student.js');

studroute.get('/insertStudent',async(req,res)=>{;

    try{
     await Student.insertMany([
     {name:"Ajay",email:"ajay@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Vijay",email:"vijay@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Sujay",email:"sujay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"jay",email:"jay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"jayesh",email:"jayesh@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Chandan",email:"chandan@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Dhiraj",email:"dhiraj@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Emraan",email:"emraan@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Faizal",email:"faizal@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Pooja",email:"pooja@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Priya",email:"priya@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Payal",email:"payal@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Isha",email:"isha@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Ishista",email:"ishita@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Mahima",email:"mahima@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Mahesh",email:"mahesh@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Mangesh",email:"mangesh@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Mohan",email:"mohan@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Manoj",email:"manoj@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Simran",email:"simran@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Kiran",email:"kiran@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"kamal",email:"kamal@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Sanjay",email:"sanjay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Rohit",email:"rohit@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Ramesh",email:"ramesh@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Rohan",email:"rohan@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Rishi",email:"rishi@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Raman",email:"raman@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"},
     {name:"Vijay",email:"vijay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Vinay",email:"vinay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Veemac",email:"veemac@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Hrishi",email:"hrishi@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Hiren",email:"hiren@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Hitesh",email:"hitesh@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Durgesh",email:"durgesh@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Jyoti",email:"jyoti@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Khushi",email:"khushi@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"IT"},
     {name:"Khushboo",email:"khushboo@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Naman",email:"naman@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Neha",email:"neha@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Sneha",email:"sneha@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Monu",email:"monu@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Shahrukh",email:"shahrukh@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Ranveer",email:"ranveer@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Ranbir",email:"ranbir@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Raju",email:"raju@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Ruhan",email:"ruhan@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Salman",email:"salman@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Akshay",email:"akshay@uk.in",phn_no:"+91-24657892",Type:"Student", Grad:"2022",Stream:"Comps"},
     {name:"Sonu",email:"sonu@uk.in",phn_no:"+91-24657892",Type:"Student",Grad:"2022",Stream:"Comps"}
    ]);
    res.status(200).send("The student data inserted sucessfull");
    }
    catch(err){
        res.status(400).send(`The error is occured ${err}`);
    }
});

module.exports = studroute;