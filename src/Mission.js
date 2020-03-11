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
            
                <h1 className="indent">Benefits & Resources</h1>
                <p className="indent indent-more p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tortor id sapien rutrum viverra. Morbi mi massa, tincidunt id convallis id, sagittis quis ligula. Proin orci odio, aliquet nec molestie et, mattis id nisl. Maecenas aliquam erat tortor, finibus semper leo fringilla non. Suspendisse metus ligula, efficitur a velit in, eleifend ultrices diam. Vestibulum eget quam viverra, condimentum purus rutrum, ullamcorper mi. Aenean congue est scelerisque, volutpat diam nec, euismod sapien. Nullam suscipit nisl.</p>
            
                
            
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
