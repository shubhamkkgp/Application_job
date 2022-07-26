const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Employee",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(() => {
  console.log(`connection successful`);
}).catch(() => {
  console.log(`no connection`);
})