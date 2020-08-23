import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import HomeGeneral from "./components/HomeGeneral";
import HomeFeat2 from "./components/HomeFeat2";
import HomeFeat5 from "./components/HomeFeat5";
import HomeFeat3 from "./components/HomeFeat3";
import HomeFeat4 from "./components/HomeFeat4";
import HomeFeat6 from "./components/HomeFeat6";
import Cat from "./components/Cat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Error404 from './components/Error404';
import ScrollToTop from './components/ScrollToTop';


import {connect} from 'react-redux';
import axios from 'axios';
import {Helmet} from 'react-helmet';

//import "./css/amp-style.css";
//import "./css/editor-style.css";
//import "./css/iecss.css";
//import "./css/reset.css";
//import "./css/rtl.css";
import "./style.css";
import "./css/media-queries.css";
//import "./css/amp-media-queries.css";
//import "./css/media-queries-rtl.css";






function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>TrendIndi - India Trending News</title>
        <meta name="description" content="TrendIndi brings you all the Trending News: Latest Trending in India, Buzz, Hot on Social Media, News Articles, videos, and ... , What is Trending in the World, World Trending News, Trending on Social Media." />
      </Helmet>
      <HomeGeneral />
      <HomeFeat2 />
      <HomeFeat3 />
      <HomeFeat4 />
      <HomeFeat5 />
      <HomeFeat6 />
    </div>
  );
}

class App extends React.Component {

  componentDidMount() { 
    const start = new Date();
    var position ={lat:0,lon:0}
    navigator.geolocation.getCurrentPosition((p)=>{
      position.lat=p.coords.latitude;
      position.lon=p.coords.longitude;
    }
    )

    // window.addEventListener('beforeunload', () =>{
    //     send=false;
    //     const end = new Date();
    //     const diffTime = end - start
    //     let data={
    //       Browser: navigator.appName,
    //       Platform: navigator.platform,
    //       Location: [position],
    //       SessionTime:diffTime/1000,
    //       KeyWords: this.props.keywords,
    //       ClickedArticles: this.props.cart
    //   }
    //   console.log(data)
    //   axios.post('/api/get/data', {
    //     data: data
    //   });
    // })
    // window.addEventListener('pagehide', () =>{
    //     const end = new Date();
    //     const diffTime = end - start
    //     let data={
    //       Browser: navigator.appName,
    //       Platform: navigator.platform,
    //       Location: [position],
    //       SessionTime:diffTime/1000,
    //       KeyWords: this.props.keywords,
    //       ClickedArticles: this.props.cart
    //   }
    //   console.log(data)
    //   axios.post('/api/get/data', {
    //     data: data
    //   });
    // })
    var isOnIOS = navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i);
    var eventName = isOnIOS ? "pagehide" : "visibilitychange";
    window.addEventListener(eventName, () =>{
      const end = new Date();
      const diffTime = end - start
      let data={
        Browser: navigator.appName,
        Platform: navigator.platform,
        Location: [position],
        SessionTime:diffTime/1000,
        KeyWords: this.props.keywords,
        ClickedArticles: this.props.cart
    }
    console.log(data)
    axios.post('/api/get/data', {
      data: data
    });
  })
  }
  render(){
  return (
  <Router>
    <ScrollToTop />
    <React.Fragment>
    <Header/>
      <Switch>
        <Route exact path = {"/"} component = {Home} />
        <Route exact path = {"/news/:category"} component = {Cat} />
        <Route exact path = {"/terms"} component = {Terms} />
        <Route exact path = {"/privacy"} component = {Privacy} />
        <Route exact path = {"/page_not_found"} component = {Error404} />
        <Route exact path = {"/*"} render={() => {
                        return <Redirect to={'/page_not_found'}/>
                    }}/>           
      </Switch>
    <Footer/>
    </React.Fragment>
  </Router>
  );
}
}
const mapStateToProps = (state, props) =>  {

	const cart =  state.article.cart
	const keywords =  state.article.keywords

	
	return {
		cart, keywords
	}
}
export default connect(mapStateToProps, null)(App);
