import React, { Component } from 'react';

import LecturePic from "./images/wlc-lecture-reg.png";
import Testimonial from './components/Testimonial.js'

export class Join extends Component {
    render() {
        return (
            
            <div className="page-container">
                
                <div className="tan-foot">
                <p className="tan-text" style={{textAlign: 'center'}}>Applications for the 2023 – 2024 program year are currently closed. Please check back in Spring 2024 for updates on the next application cycle.</p>
            </div>
                <div className="indent">
                <p className="indent-more p">Thank you for your interest in the Women’s Leadership Council. Applications for the 2023 – 2024 program year are currently closed. </p>
                <p className="indent-more p"><i>If you are interested in joining our community and meet the WLC’s eligibility requirements (see below), we encourage you to check back here in Spring 2024 for updates on the next application cycle.</i></p>
                <p className="indent-more p">Our membership/program year generally runs from September through June of each year. We typically open applications for new members in the spring, review them in the summer, and onboard new WLC members in the fall. </p>
                <p className="indent-more p">If you have any questions, please reach out to Jennie, the WLC’s incredible Virtual Assistant, at <a href = "mailto: assistant@wlcsocialimpact.com.">assistant@wlcsocialimpact.com.</a></p>
                </div><div>
                <p className='tan-text' style={{textAlign: 'center'}}>WLC Eligibility Requirements
</p></div><div className='indent'>
                <p className="indent-more p"><b>Our membership process is rooted in values of equity and accessibility. Potential members must complete a simple application and meet the following basic criteria:</b></p>
                <ol className="indent-more p">
                    <li>Currently an Executive Director/Co-Executive Director/CEO/President of a social impact organization based in NYC; </li>
                    <li>Identify as female—transwomen, cis-gendered women, and nonbinary people who are interested in a female-identified space are welcome; and</li>
                    <li style={{paddingBottom: "0px"}}>Be willing and able to commit to participating in the WLC community for an entire program year (typically mid-September – mid-June), including: </li>
                </ol>
                <div className='indent'>
                <ul className="indent-more p" >
                    <li>Attending (to the extent possible) 5 – 6 meetings/year. These meetings are the primary venue for members to provide/receive peer support; learn and share information and resources; build relationships; and hear guest speakers (generally subject matter experts in topics members express interest in). Meetings are generally 1.5 hours; scheduled at the beginning of the year; and scheduled on a rotation of days/times to account for as wide an array of schedules as possible. </li>
                        <li>
                        Actively participating in the WLC listserv (which is dynamic and resource-rich with information on funding, best practices, training opportunities, leadership development opportunities–in short, anything members find useful);   
                        </li>
                        <li>
                        Sharing ideas, resources, thought-partnership with fellow members; and   
                        </li>
                        <li>
                        Participating in an annual half-day retreat (usually held in person in Manhattan, with the date/time announced significantly in advance); and
                        </li>
                        <li>
                        If interested, participating in one or more of the WLC’s topic-specific groups (e.g., Board leadership; Leadership Transitions). These smaller, topic-based groups are organized by members each program year, based on interest. 
                        </li>
                </ul>
                </div>
                </div>
                {/* <img className="lecture-photo" src={LecturePic} alt="Lecture Photo"/>
                <p className="caption">2019 WLC Retreat featuring Guest Speaker-Toni Harris Quinnerly, Consultant & Senior Expert at Egon Zehnder's Leadership Advisory Practice</p> */}
<div>
                <p className='tan-text' style={{textAlign: 'center'}}>WLC Membership Fees
</p></div>
                
                <div className="indent">
                <p className="indent-more p"><b>The WLC is funded by membership fees—which are tiered based on organizational budget size. 
                    <br></br><br></br>
                    
                We believe that the return on investment for organizations is exponential, and we feel strongly that these fees should be paid by the organizations for which our members work.
                <br></br><br></br>
                <i>Scholarships are available, and we’re committed to not turning anyone away due to the ability of their organization to pay for membership.</i> </b></p>
                <p className="indent-more p"><b>2023 – 2024 Program Year Membership Fees<br></br> <span style={{fontSize: '16px'}}>Please note: These fees may change in future program years.</span></b></p>
                <ul className="indent-more p">
                    <li>$100 for leaders of organizations with a budget of $250K or less, or for leaders currently unaffiliated with an organization</li>
                    <li>$300 for leaders of organizations with a budget of greater than $250K but less than $1.5M</li>

                    <li>$500 for leaders of organizations with a budget of greater than $1.5M but less than $5M</li>
                    <li>
                    $700 for leaders of organizations with a budget of greater than $5M
                    </li>
                </ul>
                {/* <p className="indent-more p"><b>If you’re interested in joining for our next program year (September 2023 – June 2024), please complete <a href="https://www.surveymonkey.com/r/MLMYBG7">this application</a> by Friday, June 30, 2023. We will be in touch by July 14th; admitted members will receive information about how to make membership payments.</b> </p>
                <p className='indent-more p'>
                If you have any questions, please reach out to Jennie, the WLC’s incredible Virtual Assistant, at assistant@wlcsocialimpact.com.
                </p>
            </div>

            <a href="https://www.surveymonkey.com/r/MLMYBG7"><div className="button">APPLY</div></a> */}
            
            
</div>
            </div>
        );
    }
}

export default Join;
