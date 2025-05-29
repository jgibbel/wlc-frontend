import React, { Component } from 'react';

import LecturePic from "./images/wlc-lecture-reg.png";
import Testimonial from './components/Testimonial.js'

export class Join extends Component {
    render() {
        return (
            
            <div className="page-container">
                
                <div className="tan-foot">
                <p className="tan-text" style={{textAlign: 'center'}}>Applications for the 2025 – 2026 program year are now live!</p>
            </div>
                <div className="indent">
                <p className="indent-more p">Thank you for your interest in the Women’s Leadership Council. Our upcoming membership/program year will run from September 2025 through June 2026. To apply for the 2025–26 cohort, <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsvnu3EBDlMpxte2uqEomgfnISHnoniLcLVLYeeXEhGpSqvQ/viewform?usp=dialog">please fill out this Google Form.</a></p>
                <p className="indent-more p">If you have any questions, please reach out to us at <a href = "mailto: assistant@wlcsocialimpact.com.">assistant@wlcsocialimpact.com.</a></p>
                </div><div>
                <p className='tan-text' style={{textAlign: 'center'}}>WLC Eligibility Requirements
</p></div><div className='indent'>
                <p className="indent-more p"><b>Our membership process is rooted in values of equity and accessibility. Potential members must complete a simple application and meet the following basic criteria:</b></p>
                <ol className="indent-more p">
                    <li>Currently in an ongoing (v. interim) role as an Executive Director/Co-Executive Director/CEO/President of a social impact organization based in NYC (leaders of the regional chapters of national organizations are eligible to join);
                    </li>
                    <li>Identify as female—trans women, cisgender women, and nonbinary people who are interested in a female-identified space are welcome; and</li>
                    <li style={{paddingBottom: "0px"}}>Be willing and able to commit to participating in the WLC community for an entire program year (typically mid-September – mid-June), including:</li>
                </ol>
                <div className='indent'>
                <ul className="indent-more p" >
                    <li>Attending (to the extent possible) 4 – 5 meetings/year. These meetings are the primary venue for members to provide/receive peer support; learn and share information and resources; build relationships; and hear guest speakers (generally subject matter experts in topics members express interest in). Meetings are generally 1.5 hours; scheduled at the beginning of the year; and scheduled on a rotation of days/times to account for as wide an array of schedules as possible. The 2025-2026 meetings are tentatively scheduled for:</li>
                    <ul className="indent-more p" >
                        <li>Wednesday, September 17, 9:00 am – 10:45 am (in person)</li>
                        <li>Thursday, December 4, 12:00 pm – 1:30 pm (via Zoom)</li>
                        <li>Tuesday, February 10, 3:30 pm – 5:00 pm (in person)</li>
                        <li>Thursday, April 22, 9:00 am – 10:45 am (in person)</li>
                        <li>Wednesday, June 10, 12:30 – 5:00 pm (in-person retreat)</li>
                    </ul>
                        <li>
                        Actively participating in the WLC listserv (which is dynamic and resource-rich with information on funding, best practices, training opportunities, leadership development opportunities–in short, anything members find useful);  
                        </li>
                        <li>
                        Sharing ideas, resources, thought-partnership with fellow members;
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
                <p className="indent-more p"><b>The WLC is funded by membership fees, which are tiered based on organizational budget size. Membership fees are used to cover operating expenses, including our administrative support, technology, space rental, food and beverages for in-person meetings, honoraria, scholarships, etc.
 
                    <br></br><br></br>
                    Given the difficult economic circumstances many organizations are facing, the WLC has elected to hold fees at last year’s levels.
                    <br></br><br></br> 
                We believe that the return on investment for organizations is significant, and we feel strongly that these fees should be paid by the organizations for which our members work.
                <br></br><br></br>
                </b></p>
                <p className="indent-more p"><b>2025 – 2026 Program Year Membership Fees<br></br> <span style={{fontSize: '16px'}}>Please note: These fees may change in future program years.</span></b></p>
                <ul className="indent-more p">
                    <li>$100 for a budget less than $250k</li>
                    <li>$315 for a budget of $250K up to $1.5M</li>

                    <li>$525 for a budget of $1.5M up to $3M</li>
                    <li>$575 for a budget of $3M up to $5M</li>
                    <li>
                    $735 for a budget of $5M up to $10M
                    </li>
                    <li>
                    $850 for a budget of $10M or more
                    </li>
                </ul>
                {/* <p className="indent-more p"><b>If you’re interested in joining for our next program year (September 2023 – June 2024), please complete <a href="https://www.surveymonkey.com/r/MLMYBG7">this application</a> by Friday, June 30, 2023. We will be in touch by July 14th; admitted members will receive information about how to make membership payments.</b> </p>
                <p className='indent-more p'>
                If you have any questions, please reach out to Jennie, the WLC’s incredible Virtual Assistant, at assistant@wlcsocialimpact.com.
                </p>
            </div>*/}

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsvnu3EBDlMpxte2uqEomgfnISHnoniLcLVLYeeXEhGpSqvQ/viewform?usp=dialog"><div className="button">APPLY</div></a> 
            
            
</div>
            </div>
        );
    }
}

export default Join;
