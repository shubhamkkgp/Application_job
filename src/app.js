const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Submit = require("./models/registers");

const port = process.env.PORT || 3001;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

// app.get("/",(req,res) => {
//   res.render("index")
// });

app.get("/register",(req,res) =>{
  res.render("register");
})

app.post("/register",async(req,res) =>{
  try{
    const registerEmployee = new Submit({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      qualifications:req.body.qualifications,
      availability:req.body.availability,
      q1:req.body.q1,
      q2:req.body.q2
    })
    const registered = await registerEmployee.save();
    res.status(201);

  }catch(error){
    res.status(400).send(error);
  }
})

app.post("/register",(req,res) =>{
  res.render("register");
})

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
})