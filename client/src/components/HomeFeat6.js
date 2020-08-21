import React from "react";
import {Link} from 'react-router-dom';
import {addArticleToCart, addKeywordToCart} from "../actions";
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeFeat6 extends React.Component {
	constructor(){
		super();
		this.state = {videos : "block", celebs : "none", world : "none",videosclass : "mvp-feat-col-tab active", celebsclass : "", worldclass : ""}
		this.handleClickv = this.handleClickv.bind(this);
		this.handleClickc = this.handleClickc.bind(this);
		this.handleClickw = this.handleClickw.bind(this);
	}
	handleClickv(){
		this.setState({videos : "block", celebs : "none", world : "none", videosclass : "mvp-feat-col-tab active", celebsclass : "", worldclass : ""})
		this.props.dispatch(addKeywordToCart('videos'))
	}
	handleClickc(){
			this.setState({videos : "none", celebs : "block", world : "none", videosclass : '', celebsclass : "mvp-feat-col-tab active", worldclass : ""})
			this.props.dispatch(addKeywordToCart('celebs'))
		}
	handleClickw(){
			this.setState({videos : "none", celebs : "none", world : "block", videosclass : '', celebsclass : '', worldclass : "mvp-feat-col-tab active"})	
			this.props.dispatch(addKeywordToCart('world'))
		}  
    render() {
        return this.props.world !== undefined ? (
<div className="mvp-main-blog-wrap left relative" style={{transform: "none", paddingTop:"20px", paddingBottom:"20px"}}>
	<div className="mvp-main-box" style={{transform: "none"}}>
		<div className="mvp-main-blog-cont left relative" style={{transform: "none"}}>
			<div className="mvp-widget-home-head">
				<h4 className="mvp-widget-home-title">
					<span className="mvp-widget-home-title">More News</span>
				</h4>
			</div>
			<div className="mvp-main-blog-out left relative" style={{transform: "none"}}>
				<div className="mvp-main-blog-in">
					<div className="mvp-main-blog-body left relative">
						<ul className="mvp-blog-story-list left relative infinite-content">
						{this.props.articles.map((article)=>{
									var age;
									var date1 = new Date();
									var date2 = new Date(article.TimeStamp); // <br> means line break in html
									const diffTime = date1 - date2
									const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
									if (diffYears!==0){
										age = diffYears + ' years ago';
									}else{
									const diffMonths= Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
									if (diffMonths!==0){
										age = diffMonths + ' months ago';
									}else{
									const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
									if (diffDays!==0){
										age = diffDays + ' days ago';
									}else{
										age = Math.floor(diffTime / (1000 * 60 * 60 )) + 'hours ago';
									}}};
									return(
											<li className="mvp-blog-story-wrap left relative infinite-post">
												<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
													<div className="mvp-blog-story-out relative">
														<div className="mvp-blog-story-img left relative">
															<img width="400" height="240" src={article.Imagelink} className="mvp-reg-img lazy wp-post-image" alt="" />
															<img width="80" height="80" src={article.Imagelink} className="mvp-mob-img lazy wp-post-image" alt="" />
														</div>
														<div className="mvp-blog-story-in">
															<div className="mvp-blog-story-text left relative">
																<div className="mvp-cat-date-wrap left relative">
																	<span className="mvp-cd-cat left relative">{article.Category}</span>
																	<span className="mvp-cd-date left relative">{age}</span>
																</div>
																<h2>{article.Title}</h2>
															</div>
														</div>
													</div>
												</a>
											</li>
											)})}
									</ul>
						<div className="mvp-inf-more-wrap left relative">
							<Link onClick={() =>{this.props.dispatch(addKeywordToCart('more_posts'))}} to={"/news/world"} className="mvp-inf-more-but" style={{display: "inline-block"}}>More Posts</Link>
							<div className="mvp-nav-links"></div>
						</div>
					</div>
				</div>
				<div id="mvp-side-wrap" className="left relative theiaStickySidebar" style={{position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: "1px"}}>
					<div className="theiaStickySidebar" style={{paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none", top: "0px", left: "954.5px"}}>
						<section id="mvp_ad_widget-6" className="mvp-side-widget mvp_ad_widget">
							<div className="mvp-widget-ad left relative">
								<span className="mvp-ad-label">Advertisement</span>
								<img src="#" alt=''/>
							</div>
						</section>
						<section id="mvp_tabber_widget-5" className="mvp-side-widget mvp_tabber_widget">
							<div className="mvp-widget-tab-wrap left relative">
								<div className="mvp-feat1-list-wrap left relative">
									<div className="mvp-feat1-list-head-wrap left relative">
										<ul className="mvp-feat1-list-buts left relative">
											<li className={this.state.videosclass}>
												<span className="mvp-feat1-list-but" onClick={this.handleClickv}>Videos</span>											
											</li>
											<li className={this.state.celebsclass} >
												<span className="mvp-feat1-list-but" onClick={this.handleClickc}>Celebs</span>
											</li>
											<li className={this.state.worldclass} >
												<span className="mvp-feat1-list-but" onClick={this.handleClickw}>World</span>
											</li>
										</ul>
									</div>
									<div id="mvp-tab-col1" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display: this.state.videos}}>
										{this.props.videos.map((article)=>{
										var age;
										var date1 = new Date();
										var date2 = new Date(article.TimeStamp); // <br> means line break in html
										const diffTime = date1 - date2
										const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
										if (diffYears!==0){
											age = diffYears + ' years ago';
										}else{
										const diffMonths= Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
										if (diffMonths!==0){
											age = diffMonths + ' months ago';
										}else{
										const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
										if (diffDays!==0){
											age = diffDays + ' days ago';
										}else{
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + 'hours ago';
										}}};
										return(
										<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
											<div className="mvp-feat1-list-cont left relative">
												<div className="mvp-feat1-list-out relative">
													<div className="mvp-feat1-list-img left relative">
														<img width="80" height="80" src={article.Imagelink} className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image" alt="" />
													</div>
													<div className="mvp-feat1-list-in">
														<div className="mvp-feat1-list-text">
															<div className="mvp-cat-date-wrap left relative">
																<span className="mvp-cd-cat left relative">{article.Newspaper}</span>
																<span className="mvp-cd-date left relative">{age}</span>
															</div>
															<h2>{article.Title}</h2>
														</div>
													</div>
												</div>
											</div>
										</a>
										)})}
									</div>
									<div id="mvp-tab-col2" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display: this.state.celebs}}>
									{this.props.celebs.map((article)=>{
										var age;
										var date1 = new Date();
										var date2 = new Date(article.TimeStamp); // <br> means line break in html
										const diffTime = date1 - date2
										const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
										if (diffYears!==0){
											age = diffYears + ' years ago';
										}else{
										const diffMonths= Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
										if (diffMonths!==0){
											age = diffMonths + ' months ago';
										}else{
										const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
										if (diffDays!==0){
											age = diffDays + ' days ago';
										}else{
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + 'hours ago';
										}}};
										return(
										<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
											<div className="mvp-feat1-list-cont left relative">
												<div className="mvp-feat1-list-out relative">
													<div className="mvp-feat1-list-img left relative">
														<img width="80" height="80" src={article.Imagelink} className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image" alt="" />
													</div>
													<div className="mvp-feat1-list-in">
														<div className="mvp-feat1-list-text">
															<div className="mvp-cat-date-wrap left relative">
																<span className="mvp-cd-cat left relative">{article.Newspaper}</span>
																<span className="mvp-cd-date left relative">{age}</span>
															</div>
															<h2>{article.Title}</h2>
														</div>
													</div>
												</div>
											</div>
										</a>
										)})}
									</div>
									<div id="mvp-tab-col3" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display: this.state.world}}>
									{this.props.world.map((article)=>{
										var age;
										var date1 = new Date();
										var date2 = new Date(article.TimeStamp); // <br> means line break in html
										const diffTime = date1 - date2
										const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
										if (diffYears!==0){
											age = diffYears + ' years ago';
										}else{
										const diffMonths= Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
										if (diffMonths!==0){
											age = diffMonths + ' months ago';
										}else{
										const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
										if (diffDays!==0){
											age = diffDays + ' days ago';
										}else{
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + 'hours ago';
										}}};
										return(
										<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
											<div className="mvp-feat1-list-cont left relative">
												<div className="mvp-feat1-list-out relative">
													<div className="mvp-feat1-list-img left relative">
														<img width="80" height="80" src={article.Imagelink} className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image" alt="" />
													</div>
													<div className="mvp-feat1-list-in">
														<div className="mvp-feat1-list-text">
															<div className="mvp-cat-date-wrap left relative">
																<span className="mvp-cd-cat left relative">{article.Newspaper}</span>
																<span className="mvp-cd-date left relative">{age}</span>
															</div>
															<h2>{article.Title}</h2>
														</div>
													</div>
												</div>
											</div>
										</a>
										)})}
									</div>
								</div>
							</div>
						</section>
						<div className="resize-sensor" style={{position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", zIndex: -1, visibility: "hidden"}}>
							<div className="resize-sensor-expand" style={{position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", zIndex: -1, visibility: "hidden"}}>
								<div style={{position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "330px", height: "353px"}}></div>
							</div>
							<div className="resize-sensor-shrink" style={{position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", zIndex: -1, visibility: "hidden"}}>
								<div style={{position: "absolute", left: "0px", top: "0px", transition: "0s", width: "200%", height: "200%"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)
    }
}

const mapStateToProps = (state, props) =>  {

	const articles =  state.article.articles.filter(article => article.Place === 'morenews');
	const videos =    state.article.articles.filter(article => article.Place === 'videos');
	const celebs =    state.article.articles.filter(article => article.Place === 'celebs');
	const world =     state.article.articles.filter(article => article.Place === 'world');
	
	return {
		articles, videos, celebs, world
	}
}
export default connect(mapStateToProps, null)(HomeFeat6);