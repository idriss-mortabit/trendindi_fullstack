import React from "react";
import {Link} from 'react-router-dom';
import {addArticleToCart, addKeywordToCart} from "../actions";
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeFeat4 extends React.Component {

    render() {
        return this.props.articles !== undefined ? (
		<section id="mvp_home_feat1_widget-4" className="mvp-widget-home left relative mvp_home_feat1_widget">
			<div className="mvp-main-box">
				<div className="mvp-widget-home-head">
					<h4 className="mvp-widget-home-title">
						<span className="mvp-widget-home-title">Sports</span>
					</h4>
				</div>
				<div className="mvp-widget-feat1-wrap left relative">
					<div className="mvp-widget-feat1-cont left relative">
					{this.props.mainarticle.map((article)=>{
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
							<div className="mvp-widget-feat1-top-story left relative">
								<div className="mvp-widget-feat1-top-img left relative">
									<img width="590" height="354" src={article.Imagelink} className="mvp-reg-img lazy wp-post-image" alt="" />
									<img width="400" height="240" src={article.Imagelink} className="mvp-mob-img lazy wp-post-image" alt="" />
								</div>
								<div className="mvp-widget-feat1-top-text left relative">
									<div className="mvp-cat-date-wrap left relative">
									<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
									</div>
									<h2>{article.Title}</h2>
								</div>
							</div>
						</a>
						)})}
					</div>
					<div className="mvp-widget-feat1-cont left relative">
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
						<a href={article.Link} onClick={() => {this.props.dispatch(addArticleToCart(article))}} rel="noopener noreferrer" target="_blank">
							<div className="mvp-widget-feat1-bot-story left relative">
								<div className="mvp-widget-feat1-bot-img left relative">
									<img width="400" height="240" src={article.Imagelink} className="mvp-reg-img lazy wp-post-image" alt="" />
									<img width="80" height="80" src={article.Imagelink} className="mvp-mob-img lazy wp-post-image" alt="" />
								</div>
								<div className="mvp-widget-feat1-bot-text left relative">
									<div className="mvp-cat-date-wrap left relative">
										<span className="mvp-cd-cat left relative">{article.Newspaper}</span><span className="mvp-cd-date left relative">{age}</span>
									</div>
									<h2>{article.Title}</h2>
								</div>
							</div>
						</a>
						)})}
						<Link onClick={() =>{this.props.dispatch(addKeywordToCart('more_sports'))}} to={'/news/sports'}>
								<div className="mvp-widget-feat2-side-more-but left relative">
								<span className="mvp-widget-feat2-side-more">More Sports</span><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
								</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
        ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)
    }
}
const mapStateToProps = (state, props) =>  {
	const allarticles =  state.article.articles.filter(article => article.Category === 'sports');
	const mainarticle =  allarticles.filter(article => article.Place === 'top');
	const articles =  allarticles.filter(article => article.Place === 'down');

	return {
		articles, mainarticle
	}
}
export default connect(mapStateToProps, null)(HomeFeat4);
