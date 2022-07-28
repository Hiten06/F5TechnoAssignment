const techroute = require('express').Router();
const Teacher = require('../model/Teacher.js');

techroute.get('/insertTeacher',async (req,res)=>{
   try{
      await Teacher.insertMany([
        {name:"Wilburn Spiess",subject:"Maths",phn_no:"+91-9234567833",Type:"Teacher",email:"wlburnspiess@uk.in"},
        {name:"Jenette Flanders",subject:"geography",phn_no:"+91-92345678333",Type:"Teacher",email:"jenetteflanders@uk.in"},
        {name:"Salena Olmos",subject:"English",phn_no:"+91-92345678333",Type:"Teacher",email:"salenaolmos@uk.in"},
        {name:"Daphne Zheng",subject:"Spanish",phn_no:"+91-9234567833",Type:"Teacher",email:"daphnezheng@uk.in"},
        {name:"Marcus Blohm",subject:"Chemistry",phn_no:"+91-2803726472",Type:"Teacher",email:"marcusblohm@uk.in"},
        {name:"Denisa Cast ",subject:"Physics",phn_no:"+91-2803726472",Type:"Teacher",email:"denishcast@uk.in"},
        {name:"Sanda Ryba",subject:"Science",phn_no:"+91-9234567777",Type:"Teacher",email:"sandaryba@uk.in"},
        {name:"Fathima sheik",subject:"EVS",phn_no:"+91-923456783333",Type:"Teacher",email:"fathimasheik@uk.in"},
        {name:"Quincy Danaher",subject:"German",phn_no:"+91-923456783333",Type:"Teacher",email:"quincydanaher@uk.in"},
        {name:"Alix Sherrill",subject:"Economics",phn_no:"+91-923456783333",Type:"Teacher",email:"alixsherrill@uk.in"},
        {name:"Dodie Staller",subject:"GFG",phn_no:"+91-923456783333",Type:"Teacher",email:"dodiestaller@uk.in"},
        {name:"Fletcher Mcconnell",subject:"Data structure",phn_no:"+91-923456783333",Type:"Teacher",email:"fletchermcconnell@uk.in"},
        {name:"Verdell Sowinski",subject:"Web",phn_no:"+91-923456783333",Type:"Teacher",email:"verdellsowinski@uk.in"},
        {name:"Gisela Levin",subject:"Android",phn_no:"+91-923456783333",Type:"Teacher",email:"giselalevin@uk.in"},
        {name:"Tressa Schwing",subject:"Blockchain",phn_no:"+91-923456783333",Type:"Teacher",email:"tressaschwing@uk.in"},
        {name:"Rosana Vales",subject:"AI",phn_no:"+91-923456783333",Type:"Teacher",email:"rosanavales@uk.in"},
        {name:"Margart Vitello",subject:"ML",phn_no:"+91-923456783333",Type:"Teacher",email:"margartvitello@uk.in"},
        {name:"Jesusa Rickenbacker",subject:"Big Data",phn_no:"+91-923456783333",Type:"Teacher",email:"jesusarickenbacker@uk.in"},
        {name:"Gwyneth Garling",subject:"Hadoop",phn_no:"+91-923456783333",Type:"Teacher",email:"gwynethgarling@uk.in"},
        {name:"Edgar Sarkis",subject:"System Design",phn_no:"+91-923456783333",Type:"Teacher",email:"edgarsarkis@uk.in"},
        {name:"Tandra Meadows",subject:"Object Oriented Design",phn_no:"+91-923456783333",Type:"Teacher",email:"tendrameadows@uk.in"},
        {name:"Gwen Honig",subject:"History",phn_no:"+91-9234567833",Type:"Teacher",email:"gwenhonig@uk.in"},
        {name:"Sadie Jernigan",subject:"Maths",phn_no:"+91-9234567833",Type:"Teacher",email:"sadiejernigan@uk.in"},
        {name:"Carli Belvins",subject:"geography",phn_no:"+91-92345678333",Type:"Teacher",email:"carlibelvins@uk.in"},
        {name:"Synthia Labelle",subject:"English",phn_no:"+91-92345678333",Type:"Teacher",email:"synthialabelle@uk.in"},
        {name:"Eugene Magdaleno",subject:"Spanish",phn_no:"+91-9234567833",Type:"Teacher",email:"eugenemagdaleno@uk.in"},
        {name:"Meagan Oakes",subject:"Chemistry",phn_no:"+91-2803726472",Type:"Teacher",email:"meagenoakes@uk.in"},
        {name:"Richelle Siemers",subject:"Physics",phn_no:"+91-2803726472",Type:"Teacher",email:"richellesiemers@uk.in"},
        {name:"Mariette Batdorf",subject:"Science",phn_no:"+91-9234567777",Type:"Teacher",email:"marie@uk.in"},
        {name:"Rachell Aman",subject:"EVS",phn_no:"+91-923456783333",Type:"Teacher",email:"rachell@uk.in"},
        {name:"Aleida Elsass",subject:"German",phn_no:"+91-923456783333",Type:"Teacher",email:"aleida@uk.in"},
        {name:"Kayce Kenyon",subject:"Economics",phn_no:"+91-923456783333",Type:"Teacher",email:"kayce@uk.in"},
        {name:"Ernestine Macfarland",subject:"GFG",phn_no:"+91-923456783333",Type:"Teacher",email:"ernestine@uk.in"},
        {name:"Houston Valenti",subject:"Data structure",phn_no:"+91-923456783333",Type:"Teacher",email:"houstan@uk.in"},
        {name:"Terica Brugger",subject:"Web",phn_no:"+91-923456783333",Type:"Teacher",email:"tercia@uk.in"},
        {name:"Lady Lefevers",subject:"Android",phn_no:"+91-923456783333",Type:"Teacher",email:"lady@uk.in"},
        {name:"Kurtis Jiles",subject:"Blockchain",phn_no:"+91-923456783333",Type:"Teacher",email:"kurtisjiles@uk.in"},
        {name:"Barbera Lippman",subject:"AI",phn_no:"+91-923456783333",Type:"Teacher",email:"barbera@uk.in"},
        {name:"Dinah Sauve",subject:"ML",phn_no:"+91-923456783333",Type:"Teacher",email:"dinah@uk.in"},
        {name:"Alica Pasley",subject:"Big Data",phn_no:"+91-923456783333",Type:"Teacher",email:"alica@uk.in"},
        {name:"Elizabet Kleine",subject:"Hadoop",phn_no:"+91-923456783333",Type:"Teacher",email:"elizabeth@uk.in"},
        {name:"Tawana Oberg",subject:"System Design",phn_no:"+91-923456783333",Type:"Teacher",email:"tawana@uk.in"},
        {name:"Malisa Jeanes",subject:"Object Oriented Design",phn_no:"+91-923456783333",Type:"Teacher",email:"malisa@uk.in"},
        {name:"Dusti Lemmond",subject:"Blockchain",phn_no:"+91-923456783333",Type:"Teacher",email:"kdusti@uk.in"},
        {name:"Vinnie Auerbach",subject:"AI",phn_no:"+91-923456783333",Type:"Teacher",email:"vinnie@uk.in"},
        {name:"Joaquina Arbuckle",subject:"ML",phn_no:"+91-923456783333",Type:"Teacher",email:"joaquina@uk.in"},
        {name:"Chad Rahe",subject:"Big Data",phn_no:"+91-923456783333",Type:"Teacher",email:"chad@uk.in"},
        {name:"Danika Loeffler",subject:"Hadoop",phn_no:"+91-923456783333",Type:"Teacher",email:"danika@uk.in"},
        {name:"Tresa Sinha",subject:"System Design",phn_no:"+91-923456783333",Type:"Teacher",email:"tresa@uk.in"},
        {name:"Joel Rueter",subject:"Object Oriented Design",phn_no:"+91-923456783333",Type:"Teacher",email:"joel@uk.in"}
      ]);
      res.status(200).json("The data is inserted sucessfully");
   }catch(err){
       res.status(400).json(`There is some error ${err}`);
   }
});

module.exports=techroute;