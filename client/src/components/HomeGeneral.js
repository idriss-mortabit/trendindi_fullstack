import React from "react";
import {addArticleToCart, addKeywordToCart} from "../actions";
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeGeneral extends React.Component {
	constructor(){
		super();
		this.state = {breaking : "block", latest : "none", stories : "none", breakingclass : "mvp-feat-col-tab active", latestclass : "", storiesclass : ""}
		this.handleClickb = this.handleClickb.bind(this);
		this.handleClickl = this.handleClickl.bind(this);
		this.handleClicks = this.handleClicks.bind(this);
	}
	handleClickb(){
				this.setState({breaking : "block", latest : "none", stories : "none", breakingclass : "mvp-feat-col-tab active", latestclass : "", storiesclass : ""})
				this.props.dispatch(addKeywordToCart('breaking'))
			}
	handleClickl(){
				this.setState({breaking : "none", latest : "block", stories : "none", breakingclass : "", latestclass : "mvp-feat-col-tab active", storiesclass : ""})
				this.props.dispatch(addKeywordToCart('latest'))
			}
	handleClicks(){
				this.setState({breaking : "none", latest : "none", stories : "block", breakingclass : "", latestclass : "", storiesclass : "mvp-feat-col-tab active"})	
				this.props.dispatch(addKeywordToCart('stories'))
			}   
render() {
return this.props.trending !== undefined ? (
    <div className="mvp-main-box">
		<section id="mvp-feat1-wrap" className="left relative">
			<div className="mvp-feat1-right-out left relative">
				<div className="mvp-feat1-right-in">
					<div className="mvp-feat1-main left relative">
						<div className="mvp-feat1-left-wrap relative">
						{this.props.home1.map((article)=>{
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
										age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
									}}};
									return(
							
                            	<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
								<div className="mvp-feat1-feat-wrap left relative">
									<div className="mvp-feat1-feat-img left relative">
                                    <img style={{width:"560", height:"600"}} src={article.Imagelink} className="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image" alt=""/> 
									</div>
									<div className="mvp-feat1-feat-text left relative">
										<div className="mvp-cat-date-wrap left relative">
											<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
										</div>

											<h2>{article.Title}</h2>
										
									</div>
								</div>
								</a>
								)})}
							
							<div className="mvp-feat1-sub-wrap left relative">
							{this.props.home2.map((article)=>{
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
										age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
									}}};
									return(
									<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
									<div className="mvp-feat1-sub-cont left relative">
										<div className="mvp-feat1-sub-img left relative">
											<img width="400" height="240" src={article.Imagelink} className="mvp-reg-img wp-post-image" alt="" />
											<img width="400" height="240" src={article.Imagelink} className="mvp-mob-img wp-post-image" alt="" />										
										</div>
										<div className="mvp-feat1-sub-text">
											<div className="mvp-cat-date-wrap left relative">
												<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
											</div>
											<h2>{article.Title}</h2>
										</div>
									</div>
									</a>
									)})}
							</div>
						</div>
						<div className="mvp-feat1-mid-wrap left relative">
							<h3 className="mvp-feat1-pop-head"><span className="mvp-feat1-pop-head">trending</span></h3>
							<div className="mvp-feat1-pop-wrap left relative">
							{this.props.trending.map((article)=>{
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
										age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
									}}};
									return(
                                <a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
									<div className="mvp-feat1-pop-cont left relative">
										
											<div className="mvp-feat1-pop-img left relative">
                                            <img width="400" height="240" src={article.Imagelink} className="mvp-reg-img wp-post-image" alt="" />
											<img width="80" height="80" src={article.Imagelink} className="mvp-mob-img wp-post-image" alt="" />
                                                    <div className="mvp-vid-box-wrap mvp-vid-box-mid mvp-vid-marg">
														<i className="fa fa-2 fa-play" aria-hidden="true"></i>
													</div>
                                                    
													<div className="mvp-vid-box-wrap mvp-vid-box-mid">
														<i className="fa fa-2 fa-camera" aria-hidden="true"></i>
													</div>

											</div>
										
										<div className="mvp-feat1-pop-text left relative">
											<div className="mvp-cat-date-wrap left relative">
												<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
											</div>
											<h2>{article.Title}</h2>
										</div>
									</div>
									</a>
									)})}
							</div>
						</div>
					</div>
				</div>
				<div className="mvp-feat1-right-wrap left relative">
					
						<div className="mvp-feat1-list-ad left relative">
							<span className="mvp-ad-label">advertisement</span>
						</div>

					<div className="mvp-feat1-list-wrap left relative">
						<div className="mvp-feat1-list-head-wrap left relative">
							<ul className="mvp-feat1-list-buts left relative">

								<li className={this.state.breakingclass}><span className="mvp-feat1-list-but" onClick={this.handleClickb}>Breaking</span></li>
                            
                                <li className={this.state.latestclass}><span className="mvp-feat1-list-but" onClick={this.handleClickl}>Latest</span></li>
                            
                                <li className={this.state.storiesclass}><span className="mvp-feat1-list-but" onClick={this.handleClicks}>Stories</span></li>
								
							</ul>
						</div>
						<div id="mvp-feat-tab-col1" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display: this.state.breaking}}>
						{this.props.breaking.map((article)=>{
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
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
										}}};
										return(
								<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
								<div className="mvp-feat1-list-cont left relative">
									
										<div className="mvp-feat1-list-out relative">
											<div className="mvp-feat1-list-img left relative">
                                            <img width="80" height="80" src={article.Imagelink} className="attachment-mvp-small-thumb size-mvp-small-thumb wp-post-image" alt=""/>
											</div>
											<div className="mvp-feat1-list-in">
												<div className="mvp-feat1-list-text">
													<div className="mvp-cat-date-wrap left relative">
														<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
													</div>
													<h2>{article.Title}</h2>
												</div>
											</div>
										</div>

								</div>
								</a>
                                )})}
						</div>
						<div id="mvp-feat-tab-col2" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display:this.state.latest}}>
						{this.props.latest.map((article)=>{
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
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
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
														<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
													</div>
													<h2>{article.Title}</h2>
												</div>
											</div>
										</div>

								</div>
								</a>
                                )})}
						</div>
						<div id="mvp-feat-tab-col3" className="mvp-feat1-list left relative mvp-tab-col-cont" style={{display:this.state.stories}}>
						{this.props.stories.map((article)=>{
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
											age = Math.floor(diffTime / (1000 * 60 * 60 )) + ' hours ago';
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
														<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
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
			</div>
		</section>
    </div>
    ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)
}
}
const mapStateToProps = (state, props) =>  {

	const breaking =  state.article.articles.filter(article => article.Place === 'breaking');
	const latest =  state.article.articles.filter(article => article.Place === 'latest');
	const stories =  state.article.articles.filter(article => article.Place === 'stories');
	const home1 =  state.article.articles.filter(article => article.Place === 'home1');
	const home2 =  state.article.articles.filter(article => article.Place === 'home2');
	const trending =  state.article.articles.filter(article => article.Place === 'trending');
	
	return {
		breaking, latest, stories, home1, home2, trending
	}
}
export default connect(mapStateToProps, null)(HomeGeneral);