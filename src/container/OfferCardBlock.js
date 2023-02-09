import React from "react";
import "./index.css";

const OfferCardBlock = () =>{
    return(
        <React.Fragment>
           <div className="offer-card-block">
              <div className="offer-card">
                <img src={require('./images/offer-card-1.png')} />
                <h3>100% Confidentiality </h3>
                <p>Rest assured, all your personal information is secure with us. </p>
              </div>
              <div className="offer-card">
                <img src={require('./images/offer-card-2.png')} />
                <h3>0% Plagiarism </h3>
                <p>Get original assignments without any plagiarism issues.</p>
              </div>
              <div className="offer-card">
                <img src={require('./images/offer-card-3.png')} />
                <h3>On-time Delivery </h3>
                <p>Get quality assignment delivered on time so that you get best grades. </p>
              </div>
           </div>
        </React.Fragment>
      );
}

export default OfferCardBlock;