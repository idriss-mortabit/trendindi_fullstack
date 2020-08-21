const mongoose = require('mongoose');

const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));

  const Emails = mongoose.model('Email', 
  new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email:{
      type: String,
      required:true
  },
  Message:{
      type: String,
      required:true
  },
  Time:{
      type: String,
      required:true
  }
  })
  );

 async function createEmail(Name, Email, Message, Time) {
      const Email = Emails({
        Name, Email, Message, Time
      })
      const result = await Email.save();
      console.log(result);
  }

  
async function getEmails() {
    const emails = await Emails.find()
    .select('Name Email Message Time -_id')
    console.log(emails);
}
