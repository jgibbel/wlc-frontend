import React from 'react';

import image from "./images/wlc-meeting.png";

const Landing = () => {
    return (
        <div className="landing-image">
            <img className="landing-image" src={image} alt="WLC Meeting" />
            <div className="sand-background">
            <p className="landing-text">Strong women build each other up.</p>
            </div>
        </div>
    );
}

export default Landing;
