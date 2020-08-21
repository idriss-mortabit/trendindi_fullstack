import React from "react";
import {addArticleToCart} from "../actions";
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


class Cat extends React.Component {
	componentDidMount(){
		if(!(["politics", "business", "sports", "tech", "entertainment", "lifestyle", "world"].includes(this.props.match.params.category))){
			this.props.history.push('/page_not_found');
		}
	}
    render() {	
        return this.props.Trendarticle !== undefined ? (
				<div>
					<div className="mvp-main-body-max">
							<div id="mvp-post-feat-img-wide" className="left relative">
								<div id="mvp-post-feat-img" className="left relative mvp-post-feat-img-wide2" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
									<img width="1600" height="960" src={this.props.Trendarticle.Imagelink} className="mvp-reg-img wp-post-image" alt="" />
									<img width="560" height="600" src={this.props.Trendarticle.Imagelink} className="mvp-mob-img wp-post-image" alt="" />
									<meta itemprop="url" content={this.props.Trendarticle.Imagelink} />
									<meta itemprop="width" content="1000" />
									<meta itemprop="height" content="600" />
								</div>	
								<a className="mvp-post-cat-link" href={this.props.Trendarticle.Link} onClick={() => {this.props.dispatch(addArticleToCart(this.props.Trendarticle))}} rel="noopener noreferrer" target="_blank">			
								<div id="mvp-post-feat-text-wrap" className="left relative">
									<div className="mvp-post-feat-text-main">
										<div className="mvp-post-feat-text left relative">
											<h3 className="mvp-post-cat left relative">
												
													<span className="mvp-post-cat left">{this.props.match.params.category}</span>
												
											</h3>
											<h1 className="mvp-post-title mvp-post-title-wide left entry-title" itemprop="headline">{this.props.Trendarticle.Title}</h1>
											<span className="mvp-post-excerpt left">
												<p>{this.props.Trendarticle.Newspaper}</p>
											</span>
										</div>
									</div>
								</div>
								</a>
								<span className="mvp-feat-caption">{this.props.Trendarticle.Newspaper}</span>
							</div>
						</div>
					<div className="paddings">
							<h4 className="mvp-widget-home-title">
								<span className="mvp-widget-home-title">Trending</span>
							</h4>
							<ul className="mvp-post-more-list left relative" style={{paddingBottom:"20px"}}>
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
										<a href={article.Link}  onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
										<li>
											<div className="mvp-post-more-img left relative">
												<img width="400" height="240" src={article.Imagelink} className="mvp-reg-img wp-post-image" alt="" />
												<img width="80" height="80" src={article.Imagelink} className="mvp-mob-img wp-post-image" alt="" />
												
											</div>
											<div className="mvp-post-more-text left relative">
												<div className="mvp-cat-date-wrap left relative">
													<span className="mvp-cd-cat left relative">{article.Newspaper}</span>
													<span className="mvp-cd-date left relative">{age}</span>
												</div>
												<p>{article.Title}</p>
											</div>
										</li>
									</a>
									)
								})}

							</ul>
							</div>
				</div>
            ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)
        }
		};
const mapStateToProps = (state, props) =>  {
	const articles = state.article.articles.filter(article => article.Category === props.match.params.category);
	const Trendarticle = articles.find(article => article.Place === 'top1');
	
	return {
		articles, Trendarticle
	}
}
export default connect(mapStateToProps, null)(Cat);