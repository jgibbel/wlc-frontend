import React from 'react';
import ACard from './ACard.js'

const MCard = ({photo, name, title, organization, linkedin}) => {
    return (
        <div className="m-card-container">
            {(photo === "none") ? <div className="m-card-image blue">
                <div className="m-textbox">
                <p className="m-text m-name">{name}</p>
                <p className="m-text m-other">{title}</p>
                <p className="m-text m-other">{organization}</p>
                </div>
            </div>
            
            : <img src={photo} alt={name} className="m-card-image" />}
           
           <a href={linkedin} target="_blank">
            <div className="m-overlay">
                <div className="m-textbox">
                <p className="m-text m-name">{name}</p>
                <p className="m-text m-other">{title}</p>
                <p className="m-text m-other">{organization}</p>
                </div>
            </div>
            </a>
            
        </div>
    );
};

export default MCard; 