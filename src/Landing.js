import React from 'react';
import HeaderWhite from './components/HeaderWhite'

import image from "./images/wlc-meeting-standard.png";

const Landing = () => {
    return (
        // <div className="landing-container">
            <div className="vert-center">
            <HeaderWhite />
            <div className="l-t-c">
            <p className="landing-text">Strong women build each other up.</p>
            </div>
            {/* <div className="l-i-c"><img className="landing-image" src={image} alt="WLC Meeting" /> 
            </div> */}
            </div>
        // </div>
    );
}

export default Landing;
