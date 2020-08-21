const express = require('express');
const router = express.Router();
const {createArticle, getArticles} = require('./views/Articles/articles');
const {createExpense, getExpenses} = require('./views/Expenses/expenses');
const {getVisitors} = require('./views/Traffic/traffic');




// Dashboard
router.get('/', function (req, res) {
    res.locals = {  title: 'Dashboard' };
    res.render('Dashboard/dashboard');
})

// Articles
router.get('/articles', async (req, res) =>{
    const articles = await getArticles();
    res.locals = {  title: 'Articles - TrendIndi', articles: articles };
    res.render('Articles/articles');
})

//create Article
router.get('/articles/create_article', function (req, res) {
    res.locals = {  title: 'Create Article - TrendIndi' };
    res.render('Articles/createarticle');
})

//create Expense
router.get('/expenses/create_expense', function (req, res) {
    res.locals = {  title: 'Create Expense - TrendIndi' };
    res.render('Expenses/createexpense');
})
//Traffic
router.get('/traffic', async (req, res) =>{
    const traffic = await getVisitors();
    res.locals = {  title: 'Traffic - TrendIndi', traffic: traffic };
    res.render('Traffic/traffic');
})

//Expenses
router.get('/expenses', async(req, res) => {
    const expenses = await getExpenses();
    res.locals = {  title: 'Expenses - TrendIndi', expenses : expenses };
    res.render('Expenses/expenses');
})

// Email
router.get('/email-inbox', function (req, res) {
    res.locals = {  title: 'Email Inbox' };
    res.render('Email/email_inbox');
})
router.get('/email-inbox/email-read', function (req, res) {
    res.locals = {  title: 'Email Read' };
    res.render('Email/email_read');
})


router.get('/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.redirect('/admin/login');
  });
});

// Articles API Title, Category, Link, Imagelink, Newspaper, Place
router.post('/article/create/api',async(req,res) =>{
    console.log("route")
    createArticle(req.body.title, req.body.category, req.body.link, req.body.imagelink, req.body.newspaper, req.body.place)
    res.redirect('/admin/articles');

});

// Expenses API
router.post('/expense/create/api',async(req,res) =>{
    createExpense(req.body.payer, req.body.description, req.body.amount, req.body.date)
    res.redirect('/admin/expenses');
});

// // Traffic API
// router.post('/traffic/create/api',async(req,res) =>{
//  let ClickedArticles =[];
//  for (var i=0; i<req.body.articles.length; i++){
//       article = await Articles.findOne({id: req.body.articles[i].id})
//       ClickedArticles.push(article)
//    }
//     createVisitor(req.body.IpAddress, req.body.Location, req.body.SessionTime, ClickedArticles)
//     res.redirect('/');
// });

// NOT Found
// router.get('*',function(req, res, next) {
//     res.locals = {  title: 'Page Not Found' };
//     res.render('httpErrors/pages_404');
//   });
  

module.exports = router;