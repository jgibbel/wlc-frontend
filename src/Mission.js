import React, { Component } from 'react';
import Testimonial from './components/Testimonial.js'
import './index.css'; 

export class Mission extends Component {
    render() {
        return (
            <div className="page-container">
            <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Carole Wacey"
                        title="President & CEO, Women Creating Change"
                        quote="This is a truly amazing group of women who are beyond supportive of each other in a number of ways--large and small.  Your generosity in sharing resources, ideas, insights (and compliments!) is appreciated in ways I cannot adequately describe." 
                />
            
                <h1 className="indent">Community</h1>
<p className="indent indent-more p">A safe, accessible and inclusive space that enables leaders to be vulnerable and candid in asking for
the help they need.</p>
<p className="indent indent-more p">Access to a new community of women leaders who are facing similar challenges in leadership.</p>
<p className="indent indent-more p">Access to in-person and online gatherings and an actively email list serv community.</p>
<p className="indent indent-more p">Opportunities to meet, network and ideate with other women executives leading a breadth of New York City social enterprises.</p>
                <h1 className="indent">Resources</h1>
                 <p className="indent indent-more p">Access to a community of women leaders with first-hand knowledge and experience derived from their role as EDs/CEOs/Presidents of social impact organizations.</p>
                <p className="indent indent-more p">Access to an online community that enables leaders to pose questions and share resources, information and best practices, real-time.</p>
                <p className="indent indent-more p">Access to a regularly updated resource listing that provides recommendations for personal and professional growth opportunities, event locations, funding and training opportunities.</p>
                <p className="indent indent-more p">Access to templates and policies used by organizations to interact with staff, donors, Board Members, clients, and volunteers.</p>
                <h1 className="indent">Programming</h1>
                <p className="indent indent-more p">Invitations to a series of in-person and virtual gatherings that provide space for knowledge/resource sharing and the opportunity to engage with subject matter experts.</p>
                <p className="indent indent-more p">A responsive peer coaching model focused on addressing strategic and tactical organizational and personal challenges members are facing.</p>
                <p className="indent indent-more p">Expert facilitation of in-person and virtual group meetings to offer opportunities for collaboration.</p>
                <h1 className="indent">Annual WLC Retreat</h1>
                <p className="indent indent-more p">Invitation to attend the Annual WLC Retreat which is a 1-2 day event designed to aid executive women find space in a day to connect with a community of peers to pursue the inspiration, information, and resources they are seeking to help them thrive in their personal and professional lives. The WLC Retreat agenda is designed differently each year with the shape of the Retreat defined by the real-time interests, challenges and needs WLC members have indicated they are facing. The WLC Retreat provides attendees with facilitated sessions, expert speakers and small group breakout sessions and the agenda is designed in collaboration with registered attendees.</p>
            </div>
            
        );
    }
}

export default Mission;
