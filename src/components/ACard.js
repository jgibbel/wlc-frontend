import React from 'react';

const ACard = ({photo, name, title, organization}) => {
    return (
        <div className="card-container">
            <img className="card-img" src={photo} alt={name} />
            <p className="card-text a-name">{name}</p>
            <p className="card-text a-title">{title}</p>
            <p className="card-text a-organization">{organization}</p>
        </div>
    );
};

export default ACard; 
