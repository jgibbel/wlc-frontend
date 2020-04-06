import React, { Component } from 'react';
import Testimonial from './components/Testimonial.js'
import './index.css'; 

export class Mission extends Component {
    render() {
        return (
            <div className="page-container">
            <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Person"
                        title="Job"
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan diam. Etiam mollis elit vitae bibendum varius. Nulla orci odio, feugiat at neque vitae, consequat suscipit risus. Curabitur cursus tempor ante, sit amet consectetur risus. In a venenatis nunc, quis convallis nisl. Sed maximus." 
                />
            
                <h1 className="indent">Community</h1>
                <p className="indent indent-more p">Access to a safe, accessible and inclusive community of women leaders who can offer and request advice and support through in-person gatherings and an active list serv community.</p>
                <h1 className="indent">Resources</h1>
                <p className="indent indent-more p">Access to a regularly updated resource list that provides recommendations for personal and professional growth opportunities, event locations, funding and training opportunities.</p>
                <p className="indent indent-more p">Access to templates and policies used by organizations to interact with staff, donors, Board Members, clients, and volunteers.</p>
                <h1 className="indent">Programming</h1>
                <p className="indent indent-more p">Invitations to a series of in-person and virtual gatherings that provide space for knowledge/resource sharing, a facilitated peer counseling model, and the opportunity to engage with subject matter experts.</p>
                <p className="indent indent-more p">Invitation to attend the WLC Annual Retreat which offers a 1-2 day event that includes facilitated sessions, expert speakers and is designed based on the challenges and needs WLC members have indicated they are facing in their pursuit of inspiration, information, and connection to resources and networks that can help them thrive in their personal and professional lives.</p>
                
            
            <Testimonial photo="https://source.unsplash.com/150x150/?nature,water"
                        name="Person"
                        title="Job"
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan diam. Etiam mollis elit vitae bibendum varius. Nulla orci odio, feugiat at neque vitae, consequat suscipit risus. Curabitur cursus tempor ante, sit amet consectetur risus. In a venenatis nunc, quis convallis nisl. Sed maximus." 
                />
            </div>
            
        );
    }
}

export default Mission;
