import React, { Component } from 'react';
import ACard from './components/ACard.js'

import Testimonial from './components/Testimonial.js'
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
                <div className="who-we-are">
                    <div className="w-container">
                        <p className="we-are we-p">We are a consortium of talented women in leadership positions across a breadth of  social impact organizations in New York City. </p>
                        <p className="we-are">We are committed to creating opportunities and sharing information to enable more women to live their best lives and do their best work.</p>
                        <p className="we-are">We provide and receive individual and collective support to enable each other  to serve as powerful, effective leaders in their lives and the social impact sector.</p>
                        <p className="we-are">We are currently or formerly senior-level leaders of social impact organizations (i.e., C-level, Executive Directors, Presidents, etc.).</p>
                    </div>
                    <div className="w-container bottom">
                    <img className="group-photo" src={GroupPic} alt="Group Photo"/>
                    </div>
               </div>
                
                <div className="indent mission">
                    <h1 className="white no-pad">Mission</h1>
                    <p className="indent-more p white">The mission of the WLC is to foster a community of experienced social impact leaders who:</p>
                    <ul className="indent-more p white">
                        <li>Seek out opportunities for professional and personal development</li>
                        <li>Provide and receive coaching</li>
                        <li>Share best practices, strategy, and information</li>
                        <li>Expand their connectivity to colleagues in the field</li>
                        <li>Create a safe collective space for personal and professional growth</li>
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
                
                <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Person"
                        title="Job"
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan diam. Etiam mollis elit vitae bibendum varius. Nulla orci odio, feugiat at neque vitae, consequat suscipit risus. Curabitur cursus tempor ante, sit amet consectetur risus. In a venenatis nunc, quis convallis nisl. Sed maximus." 
                />
                
                
                
                <div className="indent">
                   <h1 className="no-pad">History</h1>
                    <p className="indent-more p">The WLC was started in 2013 when Erica Hamilton assembled  a small group of women, largely Executive Directors and a C-level leader, of a variety of NYC based social impact organizations  to meeting informally, over breakfast, to discuss and provide counsel on personal and professional challenges. Over the years, as the group expanded, it evolved into a membership organization with multiple offerings and convenings. It is run by a volunteer collaborative leadership team. </p>
                    <h1>Advisory Team</h1>
                </div>

                <div className="a-team">
                    <ACard photo="https://source.unsplash.com/200x200/?nature"
                            name="Erica Hamilton"
                            title="Faculty Member at NYU & Principal at Arbor Brothers"
                            
                    />
                    <ACard photo="https://source.unsplash.com/200x200/?nature"
                            name="Lara Galinsky"
                            title="Founder & Social Impact Strategist at the Genuine"
                    />
                    <ACard photo="https://source.unsplash.com/200x200/?nature"
                            name="Lisa Holton"
                            title="Principal"
                            organization="Holton Consulting" 
                    />
                    <ACard photo="https://source.unsplash.com/200x200/?nature"
                            name="Jennifer Magida"
                            title="CEO at the New York Peace Institute & Founder & ED of Youth Advocacy
                            Corps"
                            
                    />
                    <ACard photo="https://source.unsplash.com/200x200/?nature"
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
