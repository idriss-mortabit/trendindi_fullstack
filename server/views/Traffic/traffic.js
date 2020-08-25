const mongoose = require('mongoose');
const asc = require('../Articles/schema');
const { number } = require('joi');

//const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
const uri = "mongodb+srv://dev:ZA2gTldJTz4LrTxq@cluster0.13cbv.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));

  const Visitors = mongoose.model('Visitor', 
  new mongoose.Schema({
      Date:{
        type: Date,
        default: Date.now
    },
    Platform: String,
    Device: String,
    Ipaddress: String,
    Location: [{
      lat: Number,
      lon: Number
       }] ,
    SessionTime:{
        type: String
    },
    KeyWords: [{
      keyword: String,
      quantity: Number
       }] ,
    ClickedArticles: [asc]
  })
  );

 async function createVisitor(Platform, Device, Ipaddress, Location, SessionTime, KeyWords, ClickedArticles) {
      const Visitor = Visitors({
         Platform, Device, Ipaddress, Location, SessionTime, KeyWords, ClickedArticles
      })
      const result = await Visitor.save();
      console.log(result);
  }

  
async function getVisitors() {
    const visitors = await Visitors.find()
    // .select('SessionTime KeyWords Location  ClickedArticles _id')
    // const fs = require('fs');
    // var date = new Date()
    // var name = 'visitors_exports_'+date+'.json'
    // name=name.split(' ').join('_')
    // name=name.slice(0,32)
    // name=name+'.json'

    // fs.writeFile('./exports/exported_visitors/'+name, visitors, function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    .populate('ClickedArticles', ' Title Category Newspaper Place Clicks -_id')
    .select('SessionTime KeyWords Location Browser Platform Date -_id')
    console.log(visitors);
    return visitors
}

//getVisitors()
exports.Visitor = Visitors;
exports.createVisitor = createVisitor;
exports.getVisitors = getVisitors;
