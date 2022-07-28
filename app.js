const express=require('express');
const app = express();
const dotenv= require('dotenv');
const mongoose = require('mongoose');
const teacher = require('./route/tech.js');
const Student = require('./route/stud.js');
const StudModel = require('./model/Student.js');
const TeachModel = require('./model/Teacher.js');
dotenv.config();
app.use(express.json());


app.use('/api/teacher/',teacher);
app.use('/api/student/',Student);

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to mongodb");
});


const arr = [];
const getresult = async (req,res,next)=>{

       let i=0;
       while(i<5){
       await StudModel.find({Type:"Student"}).limit(10).skip(i*10).exec((err,resultStud)=>{
            if(err){console.log(err);}
            arr.push(resultStud);
        });

        await TeachModel.find({Type:"Teacher"}).limit(10).skip(i*10).exec((err,resultTeach)=>{
              if(err){console.log(err);}
              arr.push(resultTeach);
        })
        
        i+=1;
       }
       //console.log(arr);
       next();
};

app.use(getresult);

const server = app.get('/',(req,res)=>{
    res.send(arr);
})

server.listen(8080);





