import React, { Component } from 'react';
import ACard from './components/ACard.js'

export class Home extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="indent">
                <h1>Who We Are</h1>
                <p className="indent-more p">The Women’s Leadership Council for Social Impact (WLC) is a consortium of talented women who: lead a breadth of social impact organizations and are committed to creating opportunities and sharing information to enable more women to live their best lives and do their best work.  Women participating in the WLC provide and receive individual and collective support to enable WLC members to serve as powerful, effective leaders in their lives and the social impact sector.  WLC Members are typically women who are currently or formerly senior-level leaders of social impact organizations (i.e., C-level, Executive Directors, Presidents, etc.).  </p>
                <h1>Mission</h1>
                <p className="indent-more p">The mission of the WLC is to foster a community of experienced social impact leaders who are interested in:</p>
                <ul className="indent-more p">
                    <li>Identifying opportunities for professional and personal development</li>
                    <li>Providing and receiving coaching</li>
                    <li>Sharing best practices and information</li>
                    <li>Expanding their connectivity to colleagues in the field </li>
                </ul>
                <p className="indent-more p">The WLC is committed to creating an inclusive community enhanced by diversity along many dimensions, including race, ethnicity, gender identity and national origin, and we hope to increase the representation of those populations that have been historically excluded from leadership. </p>
                <h1>Programs, Efforts & Events</h1>
                <p className="indent-more p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada efficitur quam at maximus. Duis ante justo, faucibus nec dui eget, convallis porta felis. Phasellus sed venenatis eros. Donec in pretium eros. Fusce leo justo, viverra et scelerisque id, malesuada id nibh. Quisque vel elit et orci viverra mattis. Suspendisse.</p>
                <h1>History</h1>
                <p className="indent-more p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tortor id sapien rutrum viverra. Morbi mi massa, tincidunt id convallis id, sagittis quis ligula. Proin orci odio, aliquet nec molestie et, mattis id nisl. Maecenas aliquam erat tortor, finibus semper leo fringilla non. Suspendisse metus ligula, efficitur a velit in, eleifend ultrices diam. Vestibulum eget quam viverra, condimentum purus rutrum, ullamcorper mi. Aenean congue est scelerisque, volutpat diam nec, euismod sapien. Nullam suscipit nisl.</p>
                <h1>Advisory Team</h1>
                </div>
                <div className="a-team">
                <ACard photo="https://source.unsplash.com/200x200/?nature"
                        name="Person"
                        title="Job"
                        organization="Organization" 
                />
                <ACard photo="https://source.unsplash.com/200x200/?nature"
                        name="Person"
                        title="Job"
                        organization="Organization" 
                />
                <ACard photo="https://source.unsplash.com/200x200/?nature"
                        name="Person"
                        title="Job"
                        organization="Organization" 
                />
                <ACard photo="https://source.unsplash.com/200x200/?nature"
                        name="Person"
                        title="Job"
                        organization="Organization" 
                />
                <ACard photo="https://source.unsplash.com/200x200/?nature"
                        name="Person"
                        title="Job"
                        organization="Organization" 
                />
                </div>
                <div className="button"><p>JOIN</p></div>
            </div>
        );
    }
}

export default Home;
