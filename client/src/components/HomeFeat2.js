import React from "react";
import {Link} from 'react-router-dom';
import {addArticleToCart, addKeywordToCart} from "../actions";
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

class HomeFeat2 extends React.Component {

    render() {
        return this.props.articlel !== undefined ? (
        <section id="mvp_home_feat2_widget-3" className="mvp-widget-home left relative mvp_home_feat2_widget">
            <div className="mvp-main-box">
                <div className="mvp-widget-home-head">
                    <h4 className="mvp-widget-home-title">
                        <span className="mvp-widget-home-title">politics</span>
                    </h4>
                </div>
                <div className="mvp-widget-feat2-wrap left relative">
                    <div className="mvp-widget-feat2-out left relative">
                        <div className="mvp-widget-feat2-in">
                            <div className="mvp-widget-feat2-main left relative">
                                <div className="mvp-widget-feat2-left left relative">
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
                                        <div className="mvp-widget-feat2-left-cont left relative">
                                            <div className="mvp-feat1-feat-img left relative">
                                                <img width="560" height="600" src={article.Imagelink} className="attachment-mvp-port-thumb size-mvp-port-thumb wp-post-image" alt=""/>																																								
                                                <div className="mvp-vid-box-wrap mvp-vid-marg">
                                                    <i className="fa fa-2 fa-play" aria-hidden="true"></i>
                                                </div>
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
                                </div>
							<div className="mvp-widget-feat2-right left relative">
                                {this.props.articlel.map((article)=>{
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
									<div className="mvp-widget-feat2-right-cont left relative">
										<div className="mvp-widget-feat2-right-img left relative">
											<img width="400" height="240" src={article.Imagelink} className="mvp-reg-img lazy wp-post-image" alt="" />
                                            <img width="80" height="80" src={article.Imagelink} className="mvp-mob-img lazy wp-post-image" alt="" />
                                        </div>
                                        <div className="mvp-widget-feat2-right-text left relative">
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
					<div className="mvp-widget-feat2-side left relative">
						<div className="mvp-widget-feat2-side-ad left relative">
							<span className="mvp-ad-label">Advertisement</span>
								<img src="#" alt=''/>							
                        </div>
                        <div className="mvp-widget-feat2-side-list left relative">
							<div className="mvp-feat1-list left relative">
                            {this.props.articler.map((article)=>{
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
                                <Link onClick={() =>{this.props.dispatch(addKeywordToCart('more_politics'))}} to={"/news/politics"}>
                                    <div className="mvp-widget-feat2-side-more-but left relative">
                                        <span className="mvp-widget-feat2-side-more">More Politics</span><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
        ):(<div style={{marginTop:'350px', height:'700px'}}><center><CircularProgress disableShrink /></center></div>)
    }
}
const mapStateToProps = (state, props) =>  {

	const allarticles =  state.article.articles.filter(article => article.Category === 'politics');
	const mainarticle =  allarticles.filter(article => article.Place === 'main');
	const articlel =  allarticles.filter(article => article.Place === 'sidel');
	const articler =  allarticles.filter(article => article.Place === 'sider');
	
	return {
		articlel, mainarticle, articler
	}
}
export default connect(mapStateToProps, null)(HomeFeat2);