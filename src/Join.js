import React, { Component } from 'react';

import LecturePic from "./images/wlc-lecture-reg.png";
import Testimonial from './components/Testimonial.js'

export class Join extends Component {
    render() {
        return (
            
            <div className="page-container">
                
                {/* <div className="tan-foot">
                <p className="tan-text" style={{textAlign: 'center'}}>The WLC Application Will be Open Until May 8th</p>
            </div> */}
                <div className="indent">
                <h1>Membership</h1>
                <p className="indent-more p">Information on the ideal member profile, member expectations, member benefits and the process to apply for membership is included below.</p>
                <h1>WLC Members Will Receive:</h1>
                <ul className="indent-more p">
                    <li>Access to a safe, accessible and inclusive community of women leaders who can provide and request advice and support through: online meet-ups, in-person gatherings and an email community</li>
                    <li>Access to a regularly updated crowdsourced resource list with information on: funding, best practices, training opportunities, leadership development opportunities, etc.</li>
                    <li>Access to templates and policies used by other organizations</li>
                    <li>Invitations to a series of four scheduled sessions held online and in-person throughout the year</li>
                    <li>The opportunity to form or participate in smaller topic based meeting groups (Minerva Salons)</li>
                    <li>An invitation to attend a restorative gathering to relax, reflect and connect with other WLC members typically offered in June (WLC Retreat)</li>
                </ul>
                </div>
                <img className="lecture-photo" src={LecturePic} alt="Lecture Photo"/>
                <p className="caption">2019 WLC Retreat featuring Guest Speaker-Toni Harris Quinnerly, Consultant & Senior Expert at Egon Zehnder's Leadership Advisory Practice</p>

                
                <div className="indent">
                <h1>WLC Members Will Be Expected To:</h1>
                <ul className="indent-more p">
                    <li>Uphold confidentiality and safety by ensuring what is said online and in in-person gatherings stays there </li>
                    <li>Attend and fully participate in four sessions (typically 90 mins; 9AM or 5PM start time; held online or in a Manhattan location) which provide an opportunity for members to:</li>
                    <li style={{listStyle: 'none'}}> 
                        <ul>
                            <li>provide and receive support from peers</li>
                            <li>learn and share information and resources </li>
                            <li>build relationships</li>
                            <li>hear guest speakers who are subject matter experts in areas/topics members are interested in</li>
                        </ul>
                    </li>
                    <li>Contribute meaningfully to the WLC email community by posting and responding to queries to share information and resources</li>
                    <li>Pay an annual membership fee* to support WLC’s regular operations, including space rental for gatherings, administrative support for day-to-day operations, food, beverages, etc.  Membership fees are noted below:</li>
                    <li style={{listStyle: 'none'}}> 
                        <ul>
                            <li>$550 for individuals leading social impact organizations with a budget of greater than $1.5M </li>
                            <li>$275 for individuals leading social impact organizations with a budget of less than or equal to $1.5M</li>
                        </ul>
                    </li>
                </ul>
                <p className="indent-more p">(*Please note the membership fee does NOT cover participation in the WLC Retreat)</p>
                <h1>The Ideal WLC Member Is/Will:</h1>
                <ul className="indent-more p">
                    <li>Currently an ED/CEO/President of a social impact organization</li>
                    <li>Based in NYC and leads a social impact organization</li>
                    <li>Eager to both contribute to and learn from a community of women peers working in the social impact sector </li>
                    <li>Have worked as a senior level leader (i.e. C-level, Executive Director, Vice President, etc.) either at their current organization or including prior experience for at least 12 months</li>
                    <li>Able to attend at least four WLC online or in-person gatherings annually</li>
                    <li>Comfortable and empowered to share their organization’s best practices, learnings and organizational documents</li>
                </ul>

                <p className="indent-more p">The WLC Membership typically runs from mid September through early to mid June.</p>
                <p className="indent-more p">Lastly, the WLC has a limited budget to provide scholarships to cover a portion of the membership fee for women and trans people who are leading organizations with an annual budget less than or equal to $1.5M. If you are interested in applying for a scholarship please complete the section in the application noting your interest.</p>
            </div>

            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAfr5h7HX9tTGePIW4Xy2kucOlROF8ganJLYKafELOnU6rbA/viewform"><div className="button">APPLY</div></a>
             */}
            

            </div>
        );
    }
}

export default Join;
