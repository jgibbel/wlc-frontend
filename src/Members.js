import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [
                ["Afua Atta-Mensah", "Community Voices Heard", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Afua+Atta-Mensah.png"],
                ["Akilah King",	"Room to Grow",	"Interim CEO & Executive Director, New York", "https://wlc-member-photos.s3.amazonaws.com/Akilah+King.png"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Alison+Overseth.png"],
                ["Carole Wacey", "Women Creating Change", "President & CEO", "none"],
                ["Chitra Aiyar", "Sadie Nash Leadership Project", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Chitra+Aiyar.png"],
                ["Chymeka Olfonse", "BUILD NYC", "Regional Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png"],
                ["Danae Mcleod", "Grace Outreach", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danae+Mcleod.png"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png"],
                ["DeNora Getachew", "Generation Citizen", "New York City Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DeNora+Getachew.png"],
                ["Dominique Jones", "Boys & Girls Club of Harlem", "Executive Director", "none"],
                ["Erasma Monticciolo",	"Power of Two",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Erasma+Monticciolo.png"],
                ["Erica Hamilton", "Arbor Brothers", "Principal", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png"],
                ["Gabrielle Horowitz-Prisco", "Lineage Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png"],
                ["Gayle Villani", "GO Project",	"Executive Director", "none"],
                ["Jacki	Kelly",	"Friends of the Children New York", "Development Director", "none"],
                ["Jenni	Wolfson", "Chicken & Egg Pictures", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jenni+Wolfson.png"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "none"],
                ["Jessica Greer Morris", "JGM Consulting", "Consultant", "https://wlc-member-photos.s3.amazonaws.com/Jessica+Greer+Morris.png"],
                ["Jessica Santana", "America On Tech", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Jessica+Santana.png"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png"],
                ["Jinan O'Connor", "Donors Choose", "VP, Advocacy and Public Partnerships", "none"],
                ["Judy Jablon",	"Leading for Children",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Judy+Jablon.png"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "none"],
                ["Katie Leonberger","Community Resource Exchange (CRE)", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Leonberger.png"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png"],
                ["Kelley Perkins", "Actions@EBMF", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kelley+Perkins.png"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "none"],
                ["Lara Galinsky", "Director Impact Innovation, McCourt", "Founder, The Genuine", "https://wlc-member-photos.s3.amazonaws.com/Lara+Galinsky.png"],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/Lisa+Holton.png"],
                ["Maria Lizardo", "NMIC", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Maria+Lizardo.png"],
                ["Melissa Aase", "University Settlement", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Melissa+Aase.png"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png"],
                ["Molly Delano", "Friends of WHEELS", "Executive Director", "none"],
                ["Patty Machir", "Futures and Options",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Patty+Machir.png"],
                ["Rachael Morgan Peters", "Peer Health Exchange", "Senior Director, Government Relations", "none"],
                ["Rachel Barnard", "Young New Yorkers",	"Founder | Executive Director", "none"],
                ["Rhea Wong", "Rhea Wong Consulting",	"HBIC", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png"],
                ["Rochelle Sinclair",	"OneGoal", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png"],
                ["Ruth Genn", "The Heckscher Foundation for Children", "Senior Leadership Fellow", "none"],
                ["Ruth Rathblott", "HEAF", "CEO", "none"],
                ["Shivonne McKay", "Jeremiah Program New York",	"Executive Director", "none"],
                ["Tiffany Zapico", "Tiffany Zapico", "Consultant and Executive Coach", "https://wlc-member-photos.s3.amazonaws.com/Tiffany+Zapico.png"]
                ]

        return (
                <div>
                 
            <h1 className="member-heading">2019-2020 WLC Membership</h1>

            <div className="m-container">
                {memberArray.map((member) => {
                        return(
                                <MCard photo={member[3]}
                                        name={member[0]}
                                        title={member[2]}
                                        organization={member[1]}
                                />
                        )
                }) }
                
            </div>
            </div>
        );
    }
}

export default Members;
