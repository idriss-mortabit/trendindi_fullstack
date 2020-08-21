import React from "react";
import {Link} from 'react-router-dom';
import {addKeywordToCart} from "../actions";
import {connect} from 'react-redux';
import { scaleDown	 as Menu } from 'react-burger-menu'

class BMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {render:false}
    this.execute = this.execute.bind(this);
}
  execute(e){
    this.props.handler();
    this.props.dispatch(addKeywordToCart(e));
  }
  render () {
    return (
      <Menu  isOpen={this.props.state} customBurgerIcon={ false } >
        <div id="mvp-fly-wrap">
        <div id="mvp-fly-menu-wrap">
            <nav className="mvp-fly-nav-menu left relative">
                <ul >
                    
                  <li><Link to={"/"} onClick={()=>{this.execute("home_mobile")}}>Home</Link></li>
                  <li><Link to={"/news/politics"} onClick={()=>{this.execute("politics_mobile")}}>POLITICS</Link></li>
                  <li><Link to={"/news/business"} onClick={()=>{this.execute("business_mobile")}}>BUSINESS</Link></li>
                  <li><Link to={"/news/sports"}  onClick={()=>{this.execute("sports_mobile")}}>SPORTS</Link></li>
                  <li><Link to={"/news/tech"}  onClick={()=>{this.execute("tech_mobile")}}>TECH</Link></li>
                  <li><Link to={"/news/entertainment"}  onClick={()=>{this.execute("entertainment_mobile")}}>ENTERTAINMENT</Link></li>
                  <li><Link to={"/news/lifestyle"}  onClick={()=>{this.execute("lifestyle_mobile")}}>Lifestyle</Link></li>
                  <li><Link to={"/news/world"} onClick={()=>{this.execute("world_mobile")}}>World</Link></li>

                </ul>
            </nav>
        </div>
        <div id="mvp-fly-soc-wrap">
            <span className="mvp-fly-soc-head">Connect with us</span>
            <ul className="mvp-fly-soc-list left relative">

              <li><a href={"https://www.facebook.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('facebook_mobile'))}} rel="noopener noreferrer" target="_blank" className="fa fa-facebook fa-2"><span></span></a></li>
          
              <li><a href={"https://twitter.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('twitter_mobile'))}} rel="noopener noreferrer" target="_blank" className="fa fa-twitter fa-2"><span></span></a></li>
            
              <li><a href={"https://www.instagram.com/"} onClick={() =>{this.props.dispatch(addKeywordToCart('instagram_mobile'))}} rel="noopener noreferrer" target="_blank" className="fa fa-instagram fa-2"><span></span></a></li>

              <li><a href={"https://www.youtube.com/"}  onClick={() =>{this.props.dispatch(addKeywordToCart('youtube_mobile'))}} rel="noopener noreferrer" target="_blank" className="fa fa-youtube-play fa-2"><span></span></a></li>
           
            </ul>
        </div>
    </div>
      </Menu>
    );
  }
}
export default connect()(BMenu);