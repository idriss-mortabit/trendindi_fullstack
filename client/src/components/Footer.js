import React from 'react';
import {Link} from 'react-router-dom';
import {addKeywordToCart} from "../actions";
import {connect} from 'react-redux';


class Footer extends React.Component {
  
  render() {
    return (
      <footer  id="mvp-foot-wrap" className="left relative">
      <div id="mvp-foot-top" className="left relative">
        <div className="mvp-main-box">
          <div  id="mvp-foot-logo" className="left relative">
              <Link onClick={() =>{this.props.dispatch(addKeywordToCart('home_logo_footer'))}}  to={"/"}><img src={require("../images/logo-large.png")} alt="" data-rjs="2" /></Link>
          </div>
          <div  id="mvp-foot-soc" className="left relative">
            <ul className="mvp-foot-soc-list left relative">
              <li><a href={"https://www.facebook.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('facebook_footer'))}} rel="noopener noreferrer" style={{backgroundColor: "#2c3764"}} target="_blank" className="fa fa-facebook fa-2" ><span></span></a></li>
              <li><a href={"https://twitter.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('twitter_footer'))}} rel="noopener noreferrer" style={{backgroundColor: "#2c3764"}} target="_blank" className="fa fa-twitter fa-2" ><span></span></a></li>
              <li><a href={"https://www.instagram.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('instagram_footer'))}} rel="noopener noreferrer" style={{backgroundColor: "#2c3764"}} target="_blank" className="fa fa-instagram fa-2" ><span></span></a></li>
              <li><a href={"https://www.youtube.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('youtube_footer'))}} rel="noopener noreferrer" style={{backgroundColor: "#2c3764"}} target="_blank" className="fa fa-youtube-play fa-2" ><span></span></a></li>
            </ul>
          </div>
          <div id="mvp-foot-menu-wrap" className="left relative">
            <div id="mvp-foot-menu" className="left relative">
              <ul className="mvp-foot-menu-list">
              
                <li><Link to={"/"} >home</Link></li>
                <li><Link to={"/news/politics"} onClick={() => {this.props.dispatch(addKeywordToCart('politics_footer'))}} >politics</Link></li>
                <li><Link to={"/news/business"} onClick={() => {this.props.dispatch(addKeywordToCart('business_footer'))}} >business</Link></li>
                <li><Link to={"/news/sports"} onClick={() => {this.props.dispatch(addKeywordToCart('sports_footer'))}} >sports</Link></li>
                <li><Link to={"/news/tech"} onClick={() => {this.props.dispatch(addKeywordToCart('tech_footer'))}} >tech</Link></li>
                <li><Link to={"/news/entertainment"} onClick={() => {this.props.dispatch(addKeywordToCart('entertainment_footer'))}} >entertainment</Link></li>
                <li><Link to={"/news/lifestyle"} onClick={() => {this.props.dispatch(addKeywordToCart('lifestyle_footer'))}} >lifestyle</Link></li>
                <li><Link to={"/news/world"} onClick={() => {this.props.dispatch(addKeywordToCart('world_footer'))}} >world</Link></li>
                <li><Link to={"/terms"} onClick={() => {this.props.dispatch(addKeywordToCart('termsofuse_footer'))}} >terms of use</Link></li>
                <li><Link to={"/privacy"} onClick={() => {this.props.dispatch(addKeywordToCart('privacypolicy_footer'))}} >privacy policy</Link></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="mvp-foot-bot" className="left relative">
        <div className="mvp-main-box">
          <div id="mvp-foot-copy" className="left relative">
            <p>Copyright © {new Date().getFullYear()} TrendIndi, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
export default connect()(Footer); 
