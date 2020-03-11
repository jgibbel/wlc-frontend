import React from 'react';
import ACard from './ACard.js'

const MCard = ({photo, name, title, organization, bio}) => {
    return (
        <div className="m-card-container">
            <div>
            <ACard photo={photo}
                        name={name}
                        title={title}
                        organization={organization} 
                />
            </div>
            <div>
            <p className="m-bio">{bio}</p>
            </div>
            
        </div>
    );
};

export default MCard; 