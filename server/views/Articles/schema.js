const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  Title:{
      type: String,
      required:true
  },
  TimeStamp:{
      type: Date,
      default: Date.now
  },
  Category:{
      type: String,
      required:true
  },
  Link:{
      type: String,
      required:true
  },
  Imagelink:{
      type: String,
      required:true
  },
  Newspaper:{
      type: String,
      required:true
  },
  Place:{
      type: String,
      required:true
  },
  Clicks:{
      type: Number,
      default: 0
  }
})

exports.asc = schema ;