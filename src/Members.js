import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [	
                ["Abja Midha",	"Volunteers of Legal Service",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AbjaMidha.png"],
                ["Akilah King",	"Room to Grow",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AkilahKing.png"],
                ["Allegra Fishel",	"Gender Equality Law Center",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AllegraFishel.png"],
                ["Amanda Ebokosia", "The Gem Project, Inc.",	"Founder, CEO", "https://wlc-member-photos.s3.amazonaws.com/AmandaEbokosia.png"],
                ["Anastacia Kurylo", "Inform Your Community",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AnastaciaKurylo.png"],
                ["Anju Rupchandani", "Zone 126",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AnjuRupchandani.png"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Alison+Overseth.png"],
                ["Betsy Cohen", "Youth Communication",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BetsyCohen.png"],
                ["Carole Wacey", "Women Creating Change", "Former President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Carole+Wacey.png"],		
                ["Carolyn Silver", "Futures and Options", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/CarolynSilver.png"],
                ["Christina Oliver", "Classroom Inc", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristinaOliver.png"],
                ["Christine O'Connell", "Riley's Way", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristineO'Connell.png"],
                ["Chymeka Olfonse", "Robin Hood Foundation", "Managing Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png"],
                ["Dahlia Goldenberg", "The Women's Organizing Network",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DahliaGoldenberg.png"],
                ["Danae Mcleod", "Grace Outreach", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danae+Mcleod.png"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png"],
                ["Ebonie Simpson", "The Lower Eastside Girls Club of New York",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/EbonieSimpson.png"],
                ["Erasma Beras-Monticciolo",	"Tambora Dialogues",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Erasma+Monticciolo.png"],
                ["Erica Hamilton", "The Memo I Never Got (MING)", "Founder", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png"],
                ["Gabrielle Prisco", "Lineage Project",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png"],
                ["Gayle Villani", "GO Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gayle+Villani.png"],
                ["Jacki	Kelly",	"Friends of the Children New York", "Development Director", "https://wlc-member-photos.s3.amazonaws.com/Jacki+Kelly.png"],
                ["Janelle Bradshaw", "Public Prep Charter Schools",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/JanelleBradshaw.png"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/Jenn+Magida.png"],
                ["Jessica Mingus", "Lineage Project", "Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JessicaMingus.png"],
                ["Jessica Greer Morris", "Brooklyn Community Pride Center", "Interim CEO", "https://wlc-member-photos.s3.amazonaws.com/JessicaGreerMorris.png"],
                ["Jill Eisenhard", "",	"Consultant", "https://wlc-member-photos.s3.amazonaws.com/JillEisenhard.png"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png"],
                ["Judy Jablon",	"Leading for Children",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Judy+Jablon.png"],
                ["Kathleen Rubenstein", "Skadden Foundation",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/KathleenRubenstein.png"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "https://wlc-member-photos.s3.amazonaws.com/Katherine+Mott.png"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png"],
                ["Katy Gaul-Stigge", "Goodwill of NY & NJ","CEO", "https://wlc-member-photos.s3.amazonaws.com/KatyGaul.png"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kristen+Baldwin.png"],
                ["Leah Cover", "Ruth's Refuge",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/LeahCover.png"],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/LisaHolton.png"],
                ["Lynne Holden", "Mentoring In Medicine, Inc", "CEO", "https://wlc-member-photos.s3.amazonaws.com/LynneHolden.png"],
                ["Maria Lizardo", "NMIC", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Maria+Lizardo.png"],
                ["Marissa Martin", "The Advocacy Institute",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarissaMartin.png"],
                ["Marjorie Schulman", "Brooklyn Boatworks",	"Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarjorieSchulman.png"],
                ["Melissa Aase", "University Settlement", "Chief Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/Melissa+Aase.png"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png"],
                ["Michelle Yanche", "Good Shepherd Services",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MichelleYanche.png"],
                ["Molly Delano", "Futures Ignite", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Molly+Delano.png"],
                ["Nanda Prabhakar", "Spring Creek Fund", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NandaPrabhakar.png"],
                ["Pagee Cheung", "Mesa Charter School",	"Founder and Co-ED", "https://wlc-member-photos.s3.amazonaws.com/PageeCheung.png"],
                ["Pam Haas", "Facing History",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/PamHaas.png"],
                ["Rachel Cytron", "Row New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/RachelCytron.png"],
                ["Rhea Wong", "Rhea Wong Consulting",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png"],
                ["Rochelle Sinclair",	"OneGoal", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png"],
                ["Ruth Genn", "Literacy Academy Collective", "Co-Founder", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Genn.png"],
                ["Ruth Rathblott", "RuthRathblott.com", "Founder", "https://wlc-member-photos.s3.amazonaws.com/RuthRathblott.png"],
                ["Salma Muro", "Literacy Trust", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SalmaMuro.png"],
                ["Saskia Traill", "ExpandED Schools", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/SaskiaTraill.png"],
                ["Sharon Sewell-Fairman", "Workforce Professionals Training Institute","CEO", "https://wlc-member-photos.s3.amazonaws.com/SharonSewellFairman.png"],
                ["Shauwea Hamilton", "Bottom Line","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ShauweaHamilton.png"],
                ["Shivonne McKay", "ChiPS","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Shivonne+McKay.png"],
                ["Simone Jhingoor", "JahaJee Sisters",	"Co-Director", "https://wlc-member-photos.s3.amazonaws.com/SimoneJhingoor.png"],
                ["Tara Gardner", "Day Care Council of New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TaraGardner.png"],
                ["Tené Howard", "Sadie Nash",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TeneHoward.png"],
                ]

        return (
        <div>
                 
            <h1 className="member-heading">2022-2023 WLC Membership</h1>

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
