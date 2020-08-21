import React from "react";
import {Link} from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import Svg404 from './404';

class Error404 extends React.Component {
render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<Svg404 />));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
        <div style={{ background: dataUri }}>
            <div className="row">
                <div className="col-md-12">
                    <div style={{padding: "40px 15px",textAlign: "center"}} className="error-template">
                        <h1 style={{paddingTop: "150px", fontSize: "100px"}}>Oops!</h1>
                        <h2 style={{paddingTop: "100px",fontSize: "30px"}}>404 Not Found</h2>
                        <div style={{paddingTop: "20px",fontSize: "20px"}} className="error-details">
                            <strong>Sorry, an error has occured, Requested page not found!</strong>
                        </div>
                        <div style={{marginTop:"15px", marginBottom: "15px"}}>
                            <Link to={"/"} style={{marginRight:"10px", color: "black"}}><span className="glyphicon glyphicon-home"></span>Take Me Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

  export default Error404;