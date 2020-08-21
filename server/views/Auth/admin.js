const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));


  const Adminschema =   new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email:{
      type: String,
      required:true,
      unique:true
  },
  Password:{
      type: String,
      required:true
  }
})
  const Admin = mongoose.model('Admin', Adminschema);

  async function createAdmin(Name ,Email , Password) {
    const admin = Admin({
      Name ,Email , Password
    })
    const saltRound = 10;
    admin.Password = await bcrypt.hash(admin.Password, saltRound);
    const result = await admin.save();
    console.log(result);
}
//createAdmin("Idriss" ,"idriss.mortabit@gmail.com" , "9331idriss")
exports.Admin = Admin;