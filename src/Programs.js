import React, { Component } from 'react';
import Testimonial from './components/Testimonial.js'

export class Programs extends Component {
    render() {
        return (
            <div className="page-container">
                <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Danielle Guindo"
                        title="Executive Director, Read Alliance"
                        quote="I want to thank all of you again for the tremendous support we have provided one another, especially during this time of COVID-19. Just think about the number of people we are helping exponentially through our mutual aid, because the strength and wisdom of the group reaches our staff (and families!) too." 
                />
                <div className="indent">
                <h1>2021 WLC Mentoring Program</h1>
                <p className="indent-more p">
                We are thrilled to announce a new initiative we have designed to help other women EDs/CEOs/Presidents of NYC based social enterprises.</p>
                <p className="indent-more p">Our members have often shared gratitude for the WLC community, especially during this time of COVID-19, in so many ways. At the same time, we have all received requests to open up the WLC doors to more leaders who need help. We believe we have designed a program that can respond to this call. </p>
                <p className="indent-more p">This new program is open to anyone who identifies as a woman who:</p>
                <ul className="indent-more p">
                    <li>is currently a ED/CEO/President of a NYC based social enterprise</li>
                    <li>has had at least one year of senior leadership experience and</li>
                    <li>is NOT currently a member of the WLC</li>
                </ul>
                <p className="indent-more p">Mentoring will start in April and go through September 18th and will largely be conducted through virtual meet-ups and email communications. Mentors will be current or former EDs/CEOs/Presidents who are current members, alumnae or friends of the WLC with at least 7 years of experience as a senior leader of a social enterprise.</p>
                <p className="indent-more p">Current WLC members may nominate up to two leaders who meet these criteria and all nominations must be submitted by no later than April 5, 2021. Anyone who identifies as a woman interested in being mentored should reach out to a current member of the WLC to request a nomination or send an email to info@wlcsocialimpact.com.</p>
                <p className="indent-more p">To receive information on future initiatives, like the WLC Mentoring Program, please send an email to assistant@wlcsocialimpact.com.</p>
                
                </div>
                
            </div>
        );
    }
}

export default Programs;
