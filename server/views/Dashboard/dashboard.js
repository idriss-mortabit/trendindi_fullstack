const mongoose = require('mongoose');
const Visitors = require('./../Traffic/traffic');
const fs = require('fs');



async function geDaytVisitors() {
    const visitors = await Visitors.find().select('Title Category TimeStamp Newspaper Place Clicks Link Imagelink _id')
    fs.open('./exports/exported_articles/articles_exports_Thu_Aug_20_2020.json', 'r', (err, v)=>{
        if(err) throw err
        console.log(v)
    })
    // visitors.filter((visitor)=>visitor.Date)
    // console.log(visitors);
   // return visitors
}

// async function geDaytVisitors() {
//     const visitors = await Visitors.find()
//     // .select('SessionTime KeyWords Location  ClickedArticles _id')
//     // const fs = require('fs');
//     // var date = new Date()
//     // var name = 'visitors_exports_'+date+'.json'
//     // name=name.split(' ').join('_')
//     // name=name.slice(0,32)
//     // name=name+'.json'

//     // fs.writeFile('./exports/exported_visitors/'+name, visitors, function (err) {
//     //   if (err) throw err;
//     //   console.log('Saved!');
//     // });
//     visitors.populate('ClickedArticles', ' Title Category Newspaper Place Clicks -_id')
//     .select('SessionTime KeyWords Location Date -_id')
//     console.log(visitors);
//     return visitors
// }


geDaytVisitors()

