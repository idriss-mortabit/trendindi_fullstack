const mongoose = require('mongoose');
const asc = require('./schema');
const uri = "mongodb+srv://idriss:Va2lG0RNx3nOeCbd@cluster0.l8uax.mongodb.net/trendindi?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> console.log('Connected to DB ....'))
  .catch((error)=> console.error(error));

  const Articles = mongoose.model('Articles', new mongoose.Schema({
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
  }));

 async function createArticle(Title, Category, Link, Imagelink, Newspaper, Place) {
      const Article = Articles({
        Title, Category, Link, Imagelink, Newspaper, Place 
      })
      const result = await Article.save();
      console.log(result);
  }



async function getArticles() {
    const articles = await Articles.find()
    .select('Title Category TimeStamp Newspaper Place Clicks Link Imagelink _id')
    //console.log(articles);
    // const fs = require('fs');
    // var date = new Date()
    // var name = 'articles_exports_'+date+'.json'
    // name=name.split(' ').join('_')
    // name=name.slice(0,32)
    // name=name+'.json'

    // fs.writeFile('./exports/exported_articles/'+name, articles, function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    return articles;
}


// //getArticles()
// createArticle("Scientists Create Coronavirus Clone In Lab To Find COVID-19 Cure",
// "tech","https://www.indiatimes.com/technology/science-and-future/coronavirus-clone-for-covid-19-cure-520784.html",
// "https://im.indiatimes.in/content/2020/Aug/lab-test_5f3e5bcb7f6a4.jpg?w=656&h=432&cc=1","indiatimes","home1")
// createArticle("Facebook Reps Asked To Meet Shashi Tharoor-Led MPs' Panel On September 2",
// "politics","https://www.ndtv.com/india-news/amid-row-parliamentary-standing-committee-on-information-technology-summons-facebook-on-september-2-2282717?pfrom=home-topscroll",
// "https://c.ndtvimg.com/2019-09/trugle18_shashi-tharoor-pti_625x300_09_September_19.jpg?downsize=570:351","ndtv","home2")


// //trending 4
// createArticle("Kapil's Caption For Pic With Baby Anayra Will Melt The Coldest Of Hearts",
// "politics","https://www.ndtv.com/entertainment/kapil-sharmas-caption-for-pic-with-baby-anayra-will-melt-the-coldest-of-hearts-2282524#News_Trending",
// "https://c.ndtvimg.com/2020-08/psf5gt8o_kapil-sharma-_120x90_20_August_20.jpg","indiatoday","trending")
// createArticle("India not far behind worst affected countries in Covid-19 death race",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/2020-08-11T132228Z_1727891913_.png?size=483:271","indiatoday","trending")
// createArticle("Russia approves Covid vaccine 'Sputnik V', world watches with worry: All you need to know",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/2020-08-11T132228Z_1727891913_.png?size=483:271","indiatoday","trending")
// createArticle("Sanjay Dutt diagnosed with Stage 3 lung cancer, to fly to US for treatment",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/2020-08-11T132228Z_1727891913_.png?size=483:271","MCD","trending")

// //breaking 9
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","breaking")

// //latest 9
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","latest")

// //stories 9
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","stories")

// //videos 12
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","videos")

// //celebs 12
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "tech","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-celebs-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","celebs")

// //world 12
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "world","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","world")

// //morenews 6
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "lifestyle","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "lifestyle","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "lifestyle","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "lifestyle","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "tech","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "tech","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "tech","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","morenews")


// //entertainment 5
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","main")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","side")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","side")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","side")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "entertainment","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","side")

// //sports 6
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","down")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","down")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","down")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "sports","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","down")


// //business 9
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","main")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sidel")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sidel")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "business","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")


// //politics 9
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","top1")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","main")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sidel")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sidel")

// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")
// createArticle("UP Police forms SIT to probe US scholar's death after case sparks outrage",
// "politics","https://www.indiatoday.in/science/story/russia-covid-vaccine-sputnik-latest-update-putin-approval-all-you-need-to-know-1710166-2020-08-11",
// "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/79547229_803638416725981_79845.jpeg?size=237:133","indiatimes","sider")




exports.getArticles = getArticles ;
exports.createArticle = createArticle ;
exports.Articles = Articles;
