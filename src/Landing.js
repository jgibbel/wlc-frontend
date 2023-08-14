import React from 'react';
import HeaderWhite from './components/HeaderWhite'

import image from "./images/wlc-meeting-standard.png";

const Landing = () => {
    return (
        // <div className="landing-container">
            <div className="vert-center">
            <HeaderWhite />
            {/* <a href='https://www.wlcsocialimpact.com/join'>
            <div className="tan-foot">
                <p className="tan-text" style={{textAlign: 'center'}}>Currently accepting applications for the 2023-2024 program year.</p>
            </div>
            </a> */}
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
