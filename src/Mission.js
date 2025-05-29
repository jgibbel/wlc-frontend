import React, { Component } from 'react';
import Testimonial from './components/Testimonial.js'
import './index.css'; 

export class Mission extends Component {
    render() {
        return (
            <div className="page-container">
            {/* <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Carole Wacey"
                        title="President & CEO, Women Creating Change"
                        quote="This is a truly amazing group of women who are beyond supportive of each other in a number of ways--large and small.  Your generosity in sharing resources, ideas, insights (and compliments!) is appreciated in ways I cannot adequately describe." 
                /> */}
                <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Danielle Guindo"
                        title="Executive Director, Read Alliance"
                        quote="I want to thank all of you again for the tremendous support we have provided one another…Just think about the number of people we are helping exponentially through our mutual aid, because the strength and wisdom of the group reaches our staff (and families!) too." 
                />
            
                <h1 className="indent">Community</h1>
                <ul className="indent indent-double p">
                        <li>A safe, accessible and inclusive space that enables leaders to be vulnerable and candid in asking for
                the help they need.</li>
                        <li>Access to a new community of women leaders who are facing similar challenges in leadership.</li>
                        <li>Access to in-person and online gatherings and an active email list serv community.</li>
                        <li>Opportunities to meet, network and ideate with other women executives leading a breadth of New York City social enterprises.</li>
                </ul>
                
                <h1 className="indent">Resources</h1>
                <ul className="indent indent-double p">
                        <li>Access to a community of women leaders with first-hand knowledge and experience derived from their role as EDs/CEOs/Presidents of social impact organizations.</li>
                        <li>Access to an online community that enables leaders to pose questions and share resources, information and best practices, real-time.</li>
                        <li>Access to a regularly updated resource listing that provides recommendations for personal and professional growth opportunities, event locations, funding and training opportunities.</li>
                        <li>Access to templates and policies used by organizations to interact with staff, donors, Board Members, clients, and volunteers.</li>
                </ul>
               
                <h1 className="indent">Programming</h1>
                <ul className="indent indent-double p">
                        <li>Invitations to a series of in-person and virtual gatherings that provide space for knowledge/resource sharing and the opportunity to engage with subject matter experts.</li>
                        <li>A responsive peer coaching model focused on addressing strategic and tactical organizational and personal challenges members are facing.</li>
                        <li>Expert facilitation of in-person and virtual group meetings to offer opportunities for collaboration.</li>
                </ul>
               
                <h1 className="indent">Annual WLC Retreat</h1>
                <p className="indent indent-more p">All members are invited to attend the Annual WLC Retreat — a half-day event designed to provide executive women with a dedicated space to connect with a supportive community of peers. The retreat offers a chance to recharge, gain inspiration, and access the insights and resources needed to thrive both personally and professionally. Each year, the retreat agenda is uniquely shaped by the real-time interests, challenges, and needs of its attendees, ensuring relevant and meaningful engagement.</p>
            </div>
            
        );
    }
}

export default Mission;
