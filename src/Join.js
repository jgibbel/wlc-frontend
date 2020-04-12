import React, { Component } from 'react';

import LecturePic from "./images/wlc-lecture-reg.png";
import Testimonial from './components/Testimonial.js'

export class Join extends Component {
    render() {
        return (
            
            <div className="page-container">
                 <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Danielle Guindo"
                        title="Executive Director, Read Alliance"
                        quote="I want to thank all of you again for the tremendous support we have provided one another, especially during this time of COVID-19. Just think about the number of people we are helping exponentially through our mutual aid, because the strength and wisdom of the group reaches our staff (and families!) too." 
                />
                <div className="tan-foot">
                <p style={{textAlign: 'center'}}>The WLC Application for Membership will open on April 27, 2020</p>
            </div>
                <div className="indent">
                <h1>Membership</h1>
                <p className="indent-more p">Information on the ideal member profile, member expectations, member benefits and the process to apply for membership is included below.</p>
                <h1>WLC Members Will Receive:</h1>
                <ul className="indent-more p">
                    <li>Access to a safe, accessible and inclusive community of women leaders who can provide and request advice and support through: online meet-ups, in-person gatherings and an email community</li>
                    <li>Access to a regularly updated resource list that croudsources and researches for information on: funding, best practices, training opportunities, leadership development opportunities, etc.</li>
                    <li>Access to templates and policies used by other organizations</li>
                    <li>Invitations to a series of four scheduled gatherings held online and in-person throughout the year</li>
                    <li>The opportunity to form or participate in smaller topic based meeting groups (Minerva Salons)</li>
                    <li>An invitation to attend a restorative gathering to relax, reflect and connect with other WLC members typically offered in June (WLC Retreat)</li>
                </ul>
                </div>
                <img className="lecture-photo" src={LecturePic} alt="Lecture Photo"/>
                <div className="indent">
                <h1>WLC Members Will Be Expected To:</h1>
                <ul className="indent-more p">
                    <li>Uphold confidentiality and safety by ensuring what is said online and in in-person gatherings stays there </li>
                    <li>Attend and fully participate in three in-person gatherings (typically 90 mins; 9AM or 5PM start time; held in a Manhattan location) which provide an opportunity for members to:</li>
                    <li style={{listStyle: 'none'}}> 
                        <ul>
                            <li>provide and receive support from peers</li>
                            <li>learn and share information and resources </li>
                            <li>build relationships</li>
                            <li>hear guest speakers who are subject matter expertise in areas/topics members are interested in</li>
                        </ul>
                    </li>
                    <li>Contribute meaningfully to the WLC email community by posting and responding to queries to share information and resources</li>
                    <li>Pay an annual membership fee* to support WLC’s regular operations, including space rental for gatherings, administrative support for day-to-day operations, food, beverages, etc.  Membership fees are noted below:</li>
                    <li style={{listStyle: 'none'}}> 
                        <ul>
                            <li>$550 for individuals leading social impact organizations with a budget of greater than $1.0M </li>
                            <li>$275 for individuals leading social impact organizations with a budget of less than or equal to $1.0M</li>
                            <li>$225 for individuals who are no longer leading social impact organizations</li>
                        </ul>
                    </li>
                </ul>
                <p className="indent-more p">(*Please note the membership fee does NOT cover participation in the WLC Retreat)</p>
                <h1>The Ideal WLC Member Is/Will:</h1>
                <ul className="indent-more p">
                    <li>Currently an ED/CEO/President of a social impact organization</li>
                    <li>Based in NYC and leads a social impact organization</li>
                    <li>Eager to both contribute to and learn from a community of women peers working in the social impact sector </li>
                    <li>Have worked as a senior level leader (i.e. C-level, Executive Director, Vice President, etc.) either at their current organization or including prior experience for at least 12 months as of July 2018</li>
                    <li>Able to attend at least four WLC online or in-person gatherings annually</li>
                    <li>Comfortable and empowered to share their organization’s best practices, learnings and organizational documents</li>
                </ul>

                <p className="indent-more p">New members will only be considered through a nomination from a current WLC member and all applications from new members will be considered beginning April 20, 2020. The application for new members may be found <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHh9CVuldVvjt8LCoPDrrTeelEq0EvZhcF7R6Or4kEDYxbA/viewform">here</a>. Applicants who are interested in applying, but lacking connectivity to a nominator should send a note expressing their interest along with their: 1) linkedin url and 2) bio (if available) to membership@wlcsocialimpact.com.
                </p>
                <p className="indent-more p">Lastly, the WLC has a limited budget to provide scholarships to cover a portion of the membership fee for women who are leading organizations with an annual budget less than or equal to $1.0M. If you are interested in applying for a scholarship please complete the section in the application noting your interest.</p>
            </div>
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScyHh9CVuldVvjt8LCoPDrrTeelEq0EvZhcF7R6Or4kEDYxbA/viewform"><div className="button">APPLY</div></a>
             */}
            

            </div>
        );
    }
}

export default Join;
