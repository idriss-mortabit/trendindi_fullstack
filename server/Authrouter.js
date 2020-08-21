var express = require('express');
var Authrouter = express.Router();
const Joi = require('joi');
const {Admin} = require('./views/Auth/admin');
const {Articles, getArticles} = require('./views/Articles/articles');
const {createVisitor} = require('./views/Traffic/traffic');
const bcrypt = require('bcrypt');
//Authentications all TABs.

    
//login
Authrouter.get('/admin/login', function (req, res) {
      if (req.session.user) {
            console.log("hello my dear login")
            res.redirect('/admin');
      } else {
            console.log("hello my dear2 login")
            req.session.error = 'Access denied!';
            res.locals = {  title: 'Login - TrendIndi' };
            res.render('Auth/login', {error : ""});
      }
  })

Authrouter.post('/user/login/auth',async(req,res) =>{
      const schema ={
          username : Joi.string().required().email(),
          userpassword : Joi.string().required()
      }
      console.log(req.body.username);
      // const {error} = Joi.validate(req.body, schema);
      // if(error){
      //      res.locals = {error :"Invalid Username or Password"}
         // return res.redirect(301, '/admin/login');
      // }
      console.log(req.body.userpassword);
      let user = await Admin.findOne({Email: req.body.username})
      if(!user){
            res.locals = {error :"Invalid Username or Password"}
          return res.redirect(301, '/admin/login');
      }
      console.log("buby3");
      const chechPassword = await bcrypt.compare(req.body.userpassword, user.Password);
      if(!chechPassword){
            res.locals = {error :"Invalid Username or Password"}
            return res.redirect(301, '/admin/login');
      }
      console.log("buby4");
      req.session.regenerate(function(){
      // Store the user's primary key
      // in the session store to be retrieved,
      // or in this case the entire user object
      req.session.user = user;
      console.log("buby5");
      req.session.success = 'Authenticated as ' + user.username
          + ' click to <a href="/logout">logout</a>. '
          + ' You may now access <a href="/restricted">/restricted</a>.';
      console.log("buby6");
          return res.redirect('/admin');
      });
  });

Authrouter.get('/api/get/articles', async (req, res) =>{
      const articles = await getArticles();
      res.send(articles);
  })

// Authrouter.post('/visitors/api', async (req, res) =>{
//       const articles = await getArticles();
//       res.send(articles);
// })

Authrouter.post('/api/get/data', async(req,res) =>{
//  let ClickedArticles =[];
//  for (var i=0; i<req.body.articles.length; i++){
//       article = await Articles.findOne({id: req.body.articles[i].id})
//       ClickedArticles.push(article)
//    }
      let data =  req.body.data
      data.ClickedArticles.map((article)=>{

            Articles.findOne({_id: article._id}, async(err, doc)=>{
                  doc.Clicks++
                  await doc.save()
                  console.log(doc.Clicks)
            })
      })
       
    createVisitor(data.Location, data.SessionTime, data.KeyWords, data.ClickedArticles)
});

// Authrouter.get('/admin/pages-404', function(req, res)
// {
//       res.locals = {  title: '404 Page Error - TrtendIndi' };
//       res.render('httpErrors/pages_404');
// });
// Authrouter.get('/admin/pages-500', function(req, res)
// {
//       res.locals = {  title: '500 Page Error - TrtendIndi' };
//       res.render('httpErrors/pages_500');
// });

module.exports = Authrouter;