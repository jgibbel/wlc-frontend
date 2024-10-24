import React, { Component } from 'react';
import ACard from './components/ACard.js'


import GroupPic from "./images/group-pic.JPG";
import LecturePic from "./images/wlc-lecture-reg.png";
import './index.css';

import {
    Link
  } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div className="page-container">
                <p className=" we-p">We are a consortium of talented women in leadership positions across a breadth of  social impact organizations in New York City. </p>
                        
                <div className="who-we-are">
                    <div className="w1-container">
                        <p className="we-are">We are committed to creating opportunities and sharing information to enable more women to live their best lives and do their best work.</p>
                        <p className="we-are">We provide and receive individual and collective support to enable our members to serve as powerful, effective leaders in their lives and the social impact sector.</p>
                        <p className="we-are">We seek to provide support to women leading NYC based social enterprises through a membership based community.</p>
                        {/* and a <Link className="about-text-link" to="/programs">mentoring program</Link> that’s open to non-members. */}
                        <p className="we-are">We are currently or formerly senior-level leaders of NYC based social impact organizations (i.e., C-level, Executive Directors, Presidents).</p>
                    </div>
                    <div className="w2-container bottom">
                    <img className="group-photo" src={GroupPic} alt="Group Photo"/>
                    </div>
               </div>
                
                <div className="indent mission">
                    <h1 className="white no-pad">Mission</h1>
                    <p className="indent-more p white">The mission of the WLC is to provide the fellowship, resources, and community that female-identified Executives, in the non-profit sector, often lack and cannot identify given the extreme time constraints of their roles. The mission of the WLC is to foster community and collaboration between experienced social impact leaders who are committed to:</p>
                    <ul className="indent-more p white">
                        <li>Seeking out opportunities for professional and personal development</li>
                        <li>Providing and receiving coaching</li>
                        <li>Sharing best practices, strategy, and information</li>
                        <li>Expanding their connectivity to colleagues in the field</li>
                        <li>Creating a safe collective space for personal and professional growth</li>
                    </ul>
                    <p className="indent-more p white">The WLC is committed to creating an inclusive community enhanced by diversity along many dimensions, including race, ethnicity, gender identity and national origin.  We hope to increase the representation of those populations that have been historically excluded from leadership. </p>
                </div>

                {/* <div className="who-we-are">
                    <div className="w-container top">
                        <img className="lecture-photo" src={LecturePic} alt="Leadership Lecture"/>
                    </div>
                    <div className="p-container">
                        <h1 className="programs">Programs, Efforts & Events</h1>
                        <p className="programs indent-more">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada efficitur quam at maximus. Duis ante justo, faucibus nec dui eget, convallis porta felis. Phasellus sed venenatis eros. Donec in pretium eros. Fusce leo justo, viverra et scelerisque id, malesuada id nibh. Quisque vel elit et orci viverra mattis. Suspendisse.</p>
                    </div>
                    
               </div> */}
                
               
                
                
                
                <div className="indent">
                   <h1 className="no-pad">History</h1>
                    <p className="indent-more p">The WLC was started in 2013 when <a href="https://www.linkedin.com/in/ericadhamilton/">Erica Hamilton</a> assembled  a small group of women, largely Executive Directors and a C-level leader, of a variety of NYC based social impact organizations  to meet informally, over breakfast, to discuss and provide counsel on personal and professional challenges. Over the years, as the group expanded, it evolved into a membership organization with multiple offerings and convenings. The WLC is managed by the Advisory Committee, who design and organize sessions and programs to be responsive to the real-time needs of our members. </p>
                </div>
                <div className="indent">
                    <h1>Current Advisory Committee</h1>
                </div>

                <div className="a-team">
                    {/* <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Molly.png"
                            name="Molly Delano"
                            title="Executive Director"
                            organization="Futures Ignite"
                    /> */}
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Tene.png"
                            name="Tené Howard"
                            title="Executive Director"
                            organization="Sadie Nash"
                            
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Katherine.png"
                            name="Kathrine Mott"
                            title="COO"
                            organization="Gilder Lehrman Institute" 
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Salma.png"
                            name="Salma Muro"
                            title="Executive Director"
                            organization="Christodora" 
                    />
                     <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Gabrielle.png"
                            name="Gabrielle Prisco"
                            title="Consultant/Writer"
                            organization="" 
                    />
                    {/* <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Carole.png"
                            name="Carole Wacey"
                            title="Former President & CEO"
                            organization="Women Creating Change" 
                    />                     */}
                    
                </div>
                
                <div className="indent">
                    <h1>Founding Advisory Committee & Emeritus WLC Members</h1>
                </div>

                <div className="a-team">
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Erica.png"
                            name="Erica Hamilton"
                            title="Founder, Women's Leadership Council &"
                            organization="Founder, The Memo I Never Got (MING)"
                            
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Lara.png"
                            name="Lara Galinsky"
                            title="Director Impact Innovation, McCourt"
                            organization="Founder, The Genuine"
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Lisa.png"
                            name="Lisa Holton"
                            title="Principal"
                            organization="Holton Consulting" 
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Jenn.png"
                            name="Jennifer Magida"
                            title="CEO at the New York Peace Institute"
                            organization="Founder & ED of Youth Advocacy
                            Corps"
                            
                    />
                    <ACard photo="https://wlc-member-photos.s3.amazonaws.com/AC-Kelley.png"
                            name="Kelley Perkins"
                            title="Executive Director"
                            organization="Actions@EMBF" 
                    />
                </div>

                <Link to="/join"><div className="button">JOIN</div></Link>

            </div>
        );
    }
}

export default Home;
