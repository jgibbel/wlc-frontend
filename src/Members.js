import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [
                ["Akilah King",	"Room to Grow",	"Interim CEO & Executive Director, New York", "https://wlc-member-photos.s3.amazonaws.com/Akilah+King.png"],
                ["Anju Rupchandani", "Zone 126",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AnjuRupchandani.png"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Alison+Overseth.png"],
                ["Asha Curran", "Giving Tuesday",	"Co-Founder & CEO", "https://wlc-member-photos.s3.amazonaws.com/AshaCurran.png"],
                ["Beth Finkelstein", "Felicity House",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BethFinkelstein.png"],
                ["Carole Wacey", "Women Creating Change", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Carole+Wacey.png"],
                ["Chitra Aiyar", "Sadie Nash Leadership Project", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Chitra+Aiyar.png"],
                ["Chymeka Olfonse", "BUILD NYC", "Regional Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png"],
                ["Cristen Van Vleet", "Peer Health Exchange",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/CristenVanVleet.png"],
                ["Dahlia Goldenberg", "The Women's Organizing Network",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DahliaGoldenberg.png"],
                ["Danae Mcleod", "Grace Outreach", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danae+Mcleod.png"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png"],
                ["DeNora Getachew", "Generation Citizen", "New York City Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DeNora+Getachew.png"],
                ["Erasma Monticciolo",	"Power of Two",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Erasma+Monticciolo.png"],
                ["Erica Hamilton", "Institute for Nonprofit Practice", "VP of Strategic Initiatives", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png"],
                ["Fatima Shama", "The Fresh Air Fund",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/FatimaShama.png"],
                ["Gabrielle Horowitz-Prisco", "Lineage Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png"],
                ["Gayle Villani", "GO Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gayle+Villani.png"],
                ["Jacki	Kelly",	"Friends of the Children New York", "Development Director", "https://wlc-member-photos.s3.amazonaws.com/Jacki+Kelly.png"],
                ["Jeanine Mendez", "KindWork",	"Co-Founder & COO", "https://wlc-member-photos.s3.amazonaws.com/JeanineMendez.png"],
                ["Jennifer Harwood", "Reading Partners",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JenniferHarwood.png"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/Jenn+Magida.png"],
                ["Jessica Greer Morris", "JGM Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/Jessica+Greer+Morris.png"],
                ["Jessica Santana", "America On Tech", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Jessica+Santana.png"],
                ["Jill Eisenhard", "Red Hook Initiative",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/JillEisenhard.png"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png"],
                ["Judy Jablon",	"Leading for Children",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Judy+Jablon.png"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "https://wlc-member-photos.s3.amazonaws.com/Katherine+Mott.png"],
                ["Katie Leonberger","Community Resource Exchange (CRE)", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Leonberger.png"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png"],
                ["Kelley Perkins", "Actions@EBMF", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kelley+Perkins.png"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kristen+Baldwin.png"],
                ["Lara Galinsky", "Director Impact Innovation, McCourt", "Founder, The Genuine", "https://wlc-member-photos.s3.amazonaws.com/Lara+Galinsky.png"],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/Lisa+Holton.png"],
                ["Maria Lizardo", "NMIC", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Maria+Lizardo.png"],
                ["Marissa Martin", "The Advocacy Institute",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarissaMartin.png"],
                ["Marjorie Schulman", "Brooklyn Boatworks",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarjorieSchulman.png"],
                ["Melissa Aase", "University Settlement", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Melissa+Aase.png"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png"],
                ["Michelle Yanche", "Good Shepherd Services",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MichelleYanche.png"],
                ["Molly Delano", "Friends of WHEELS", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Molly+Delano.png"],
                ["Nellie Thompson Kapur", "Green Beetz",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NellieThompsonKapur.png"],
                ["Odile Schalit", "The Brigid Alliance",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/OdileSchalit.png"],
                ["Patty Machir", "Futures and Options",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Patty+Machir.png"],
                ["Rachel Cytron", "Row New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/RachelCytron.png"],
                ["Rhea Wong", "Rhea Wong Consulting",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png"],
                ["Rochelle Sinclair",	"OneGoal", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png"],
                ["Ruth Genn", "The Heckscher Foundation for Children", "Senior Leadership Fellow", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Genn.png"],
                ["Ruth Rathblott", "HEAF", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Rathblott.png"],
                ["Salma Muro", "Literacy Trust",	" Incoming Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SalmaMuro.png"],
                ["Saskia Traill", "ExpandED Schools",	"President & CEO", "https://wlc-member-photos.s3.amazonaws.com/SaskiaTraill.png"],
                ["Shivonne McKay", "Jeremiah Program New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Shivonne+McKay.png"],
                ["Tené Howard", "Sadie Nash",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TeneHoward.png"],
                ["Tia Morris", "Teach for America",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TiaMorris.png"],
                ["Tiffany Zapico", "Benedict Silverman Foundation", "Managing Director", "https://wlc-member-photos.s3.amazonaws.com/Tiffany+Zapico.png"],
                ["Xiomara Romain", "LIFT",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/XiomaraSmithRomain.png"]
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
