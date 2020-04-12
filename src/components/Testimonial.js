import React from 'react';

const Testimonial = ({photo, name, title, quote}) => {
    return (
        <div className="test-container">
            {/* <div className="quote">"</div>
            <p className="quote-text">{quote}</p>
            <div className="quote">"</div> */}
            <blockquote><p class="quotation"> 
           "{quote}"</p>
            <footer>— {name} | {title}</footer>
            </blockquote> 
            
            
        </div>
    );
};

export default Testimonial; 
