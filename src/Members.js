import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [
                ["Akilah King",	"Room to Grow",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AkilahKing.png"],
                ["Amanda Ebokosia", "The Gem Project, Inc.",	"Founder, CEO", "https://wlc-member-photos.s3.amazonaws.com/AmandaEbokosia.png"],
                ["Anju Rupchandani", "Zone 126",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AnjuRupchandani.png"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Alison+Overseth.png"],
                ["Betsy Cohen", "Youth Communication",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BetsyCohen.png"],
                ["Carole Wacey", "Women Creating Change", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Carole+Wacey.png"],
                ["Christina Oliver", "Classroom Inc", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristinaOliver.png"],
                ["Christine O'Connell", "Riley's Way", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristineO'Connell.png"],
                ["Chymeka Olfonse", "BUILD NYC", "Regional Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png"],
                ["Cristen Van Vleet", "Peer Health Exchange",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/CristenVanVleet.png"],
                ["Dahlia Goldenberg", "The Women's Organizing Network",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DahliaGoldenberg.png"],
                ["Danae Mcleod", "Grace Outreach", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danae+Mcleod.png"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png"],
                ["DeNora Getachew", "DoSomething.org", "CEO", "https://wlc-member-photos.s3.amazonaws.com/DeNora+Getachew.png"],
                ["Erasma Monticciolo",	"Power of Two",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Erasma+Monticciolo.png"],
                ["Erica Hamilton", "The Memo I Never Got (MING)", "Founder", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png"],
                ["Ericka Stallings", "Leadership Learning Community",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/ErickaStallings.png"],
                ["Fatima Shama", "The Fresh Air Fund",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/FatimaShama.png"],
                ["Gabrielle Horowitz-Prisco", "Lineage Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png"],
                ["Gayle Villani", "GO Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gayle+Villani.png"],
                ["Jacki	Kelly",	"Friends of the Children New York", "Development Director", "https://wlc-member-photos.s3.amazonaws.com/Jacki+Kelly.png"],
                ["Janelle Bradshaw", "Public Prep Charter Schools",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/JanelleBradshaw.png"],
                ["Janelle Farris", "Brooklyn Community Services", "President/Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JanelleFarris.png"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/Jenn+Magida.png"],
                ["Jennifer Sun", "Asian Americans for Equality", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JenniferSun.png"],
                ["Jessica Santana", "America On Tech", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Jessica+Santana.png"],
                ["Jill Eisenhard", "",	"Consultant", "https://wlc-member-photos.s3.amazonaws.com/JillEisenhard.png"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png"],
                ["Josie Whittlesey", "Drama Club","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JosieWhittlesey.png"],
                ["Judy Jablon",	"Leading for Children",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Judy+Jablon.png"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "https://wlc-member-photos.s3.amazonaws.com/Katherine+Mott.png"],
                ["Katie Leonberger","Community Resource Exchange (CRE)", "Former President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Leonberger.png"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png"],
                ["Katy Gaul-Stigge", "Goodwill of NY & NJ","CEO", "https://wlc-member-photos.s3.amazonaws.com/KatyGaul.png"],
                ["Kelley Perkins", "Actions@EBMF", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kelley+Perkins.png"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kristen+Baldwin.png"],
                ["Kristina Newman-Scott", "BRIC","President", "https://wlc-member-photos.s3.amazonaws.com/KristinaNewman-Scott.png"],
                ["Lara Galinsky", "Director Impact Innovation, McCourt", "Founder, The Genuine", "https://wlc-member-photos.s3.amazonaws.com/Lara+Galinsky.png"],
                ["Leah Cover", "Ruth's Refuge",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/LeahCover.png"],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/LisaHolton.png"],
                ["Maria Lizardo", "NMIC", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Maria+Lizardo.png"],
                ["Marissa Martin", "The Advocacy Institute",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarissaMartin.png"],
                ["Melissa Aase", "University Settlement", "Chief Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/Melissa+Aase.png"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png"],
                ["Michelle Yanche", "Good Shepherd Services",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MichelleYanche.png"],
                ["Molly Delano", "Friends of WHEELS", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Molly+Delano.png"],
                ["Patty Machir", "Futures and Options",	"Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Patty+Machir.png"],
                ["Rachel Cytron", "Row New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/RachelCytron.png"],
                ["Rhea Wong", "Rhea Wong Consulting",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png"],
                ["Rochelle Sinclair",	"OneGoal", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png"],
                ["Ruth Genn", "The Heckscher Foundation for Children", "Senior Leadership Fellow", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Genn.png"],
                ["Ruth Rathblott", "RuthRathblott.com", "Founder", "https://wlc-member-photos.s3.amazonaws.com/RuthRathblott.png"],
                ["Salma Muro", "Literacy Trust", "Incoming Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SalmaMuro.png"],
                ["Saskia Traill", "ExpandED Schools", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/SaskiaTraill.png"],
                ["Shauwea Hamilton", "Bottom Line","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ShauweaHamilton.png"],
                ["Shivonne McKay", "ChiPS","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Shivonne+McKay.png"],
                ["Tené Howard", "Sadie Nash",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TeneHoward.png"],
                ["Tia Morris", "Teach for America",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TiaMorris.png"],
                ["Tiffany Zapico", "Benedict Silverman Foundation", "COO", "https://wlc-member-photos.s3.amazonaws.com/Tiffany+Zapico.png"],
                ]

        return (
        <div>
                 
            <h1 className="member-heading">2021-2022 WLC Membership</h1>

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
