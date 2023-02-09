import React from "react";
import "./index.css";

const WhyUs = () =>{
    return(
        <React.Fragment>
           <div className="why-us-block">
              <h2><span style={{color:'#000000'}}>Why</span> Us</h2>
              <img src={require('./images/border-btm-img.png')} />
              <div className="container bg-light-grey">
                 <div className="why-us-card-block">
                    <div className="why-us-card">
                         <h3>Original Work </h3>
                         <div className="aroplane"><img src={require('./images/aroplane.png')} /></div>
                         <p>Our assignment professionals have catered to students by offering them dissertation writing help with a great combination of experience.</p>
                    </div>
                    <div className="why-us-card"></div>
                    <div className="why-us-card"></div>
                    <div className="why-us-card"></div>
                    <div className="why-us-card"></div>
                    <div className="why-us-card"></div>
                 </div>
              </div>
           </div>
        </React.Fragment>
      );
}

export default WhyUs;