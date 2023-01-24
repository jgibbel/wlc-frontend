import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [	
                ["Abja Midha",	"Volunteers of Legal Service",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AbjaMidha.png", "https://www.linkedin.com/in/abja-midha/"],
                ["Akilah King",	"Room to Grow",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AkilahKing.png", "https://www.linkedin.com/in/akilah-king-mph-2908b4b1/"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/AlisonOverseth_update.png", "https://www.linkedin.com/in/alison-overseth-8a1b7253/"],
                ["Allegra Fishel",	"Gender Equality Law Center",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AllegraFishel.png", "https://www.linkedin.com/in/allegra-fishel-28988a41/"],
                ["Amanda Ebokosia", "The Gem Project, Inc.",	"Founder, CEO", "https://wlc-member-photos.s3.amazonaws.com/AmandaEbokosia.png", "https://www.linkedin.com/in/ebokosia"],
                ["Anastacia Kurylo", "Inform Your Community",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AnastaciaKurylo.png", "https://www.linkedin.com/in/anastaciakurylo/"],
                ["Dr. Anju J. Rupchandani", "Zone 126",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AnjuRupchandani_update.png", "https://www.linkedin.com/in/anju-j-rupchandani-m-s-ed-b713707"],
                ["Betsy Cohen", "Youth Communication",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BetsyCohen_update.png", "https://www.linkedin.com/in/betsy-cohen-03079b2b"],
                ["Carole Wacey", "Women Creating Change", "Former President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Carole+Wacey.png", "https://www.linkedin.com/in/carole-wacey-82397a160/"],		
                ["Carolyn Silver", "Futures and Options", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/CarolynSilver.png", "https://www.linkedin.com/in/carolynsilvernyc/"],
                ["Christina Oliver", "Classroom Inc", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristinaOliver.png", "https://www.linkedin.com/in/christina-oliver-a27a468/"],
                ["Christine O'Connell", "Riley's Way", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristineO'Connell.png", "https://www.linkedin.com/in/christineoconnell-phd"],
                ["Chymeka Olfonse", "Robin Hood Foundation", "Managing Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png", "https://www.linkedin.com/in/chymeka-olfonse-956aa2/"],
                ["Dahlia Goldenberg", "The Women's Organizing Network",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/DahliaGoldenberg.png", "https://www.linkedin.com/in/dahliagoldenberg/"],
                ["Danae Mcleod", "Grace Outreach", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danae+Mcleod.png", "https://www.linkedin.com/in/danae-mcleod-ph-d-7337b2123/"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png", "https://www.linkedin.com/in/danielle-g-guindo-msw-598b634/"],
                ["Ebonie Simpson", "The Lower Eastside Girls Club of New York",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/EbonieSimpson.png", "https://www.linkedin.com/in/eboniesimpson"],
                ["Erasma Beras-Monticciolo",	"Tambora Dialogues",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/ErasmaMonticciolo_update.png", "https://www.linkedin.com/in/erasma-beras-monticciolo-33b26a6/"],
                ["Erica Hamilton", "The Memo I Never Got (MING)", "Founder", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png", "https://www.linkedin.com/in/ericadhamilton/"],
                ["Gabrielle Prisco", "Lineage Project",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png", "https://www.linkedin.com/in/gabrielle-prisco-8441726b/"],
                ["Gayle Villani", "GO Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gayle+Villani.png", "https://www.linkedin.com/in/gayle-villani-82247031/"],
                ["Jacki	Kelly",	"Hudson Guild", "Deputy Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jacki+Kelly.png", "https://www.linkedin.com/in/jacquelinekelly217/"],
                ["Janelle Bradshaw", "Public Prep Charter Schools",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/JanelleBradshaw.png", "https://www.linkedin.com/in/janelle-bradshaw-9554bb8/"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/Jenn+Magida.png", "https://www.linkedin.com/in/jennifer-magida-9822455/"],
                ["Jessica Mingus", "Lineage Project", "Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JessicaMingus.png", "https://www.linkedin.com/in/jessica-mingus-lmsw-5715209a/"],
                ["Jessica Greer Morris", "Brooklyn Community Pride Center", "Interim CEO", "https://wlc-member-photos.s3.amazonaws.com/JessicaGreerMorris.png", "https://www.linkedin.com/in/jessica-greer-morris-a089723/"],
                ["Jill Eisenhard", "",	"Consultant", "https://wlc-member-photos.s3.amazonaws.com/JillEisenhard.png", "https://www.linkedin.com/in/jill-eisenhard-b80683b"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png", "https://www.linkedin.com/in/jill-roche-gomez-1999826/"],
                ["Judy Jablon",	"Leading for Children",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Judy+Jablon.png", "https://www.linkedin.com/in/judy-jablon-2192937/"],
                ["Kathleen Rubenstein", "Skadden Foundation",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/KathleenRubenstein.png", "https://www.linkedin.com/in/kathleen-rubenstein-83415125"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "https://wlc-member-photos.s3.amazonaws.com/Katherine+Mott.png", "https://www.linkedin.com/in/kathrinemott/"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png", "https://www.linkedin.com/in/katieorenstein/"],
                ["Katy Gaul-Stigge", "Goodwill of NY & NJ","CEO", "https://wlc-member-photos.s3.amazonaws.com/KatyGaul.png", "https://www.linkedin.com/in/katy-gaul-stigge-278270a"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kristen+Baldwin.png", "https://www.linkedin.com/in/kristenebaldwin/"],
                ["Leah Cover", "Ruth's Refuge",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/LeahCover.png", ""],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/LisaHolton.png", "https://www.linkedin.com/in/lisa-holton-8608934/"],
                ["Lynne Holden", "Mentoring In Medicine, Inc", "CEO", "https://wlc-member-photos.s3.amazonaws.com/LynneHolden.png", "https://www.linkedin.com/in/lynne-holden-md-20562445/"],
                ["Maria Lizardo", "NMIC", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Maria+Lizardo.png", "https://www.linkedin.com/in/maria-lizardo-5348921a/"],
                ["Marissa Martin", "The Advocacy Institute",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarissaMartin.png", "https://www.linkedin.com/in/marissa-martin-lmsw-b10560a"],
                ["Marjorie Schulman", "",	"Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarjorieSchulman.png", "https://www.linkedin.com/in/marjorie-schulman-3898487/"],
                ["Melissa Aase", "University Settlement", "Chief Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/MelissaAase_update.png", "https://www.linkedin.com/in/melissa-aase-0943754/"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png", "https://www.linkedin.com/in/michelekotler/"],
                ["Michelle Yanche", "Good Shepherd Services",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MichelleYanche.png", "https://www.linkedin.com/in/michelle-yanche-1418934a"],
                ["Molly Delano", "Futures Ignite", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Molly+Delano.png", "https://www.linkedin.com/in/molly-delano-b11ab416/"],
                ["Nanda Prabhakar", "The Opportunity Hub", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NandaPrabhakar.png", "https://www.linkedin.com/in/nandaprabhakar"],
                ["Pagee Cheung", "Mesa Charter School",	"Founder and Co-ED", "https://wlc-member-photos.s3.amazonaws.com/PageeCheung.png", "https://www.linkedin.com/in/pagee-cheung-60732a64/"],
                ["Pam Haas", "Facing History and Ourselves",	"Executive Director, New York Region", "https://wlc-member-photos.s3.amazonaws.com/PamHaas.png", "https://www.linkedin.com/in/pam-haas-3273639/"],
                ["Rachel Cytron", "Row New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/RachelCytron.png", "https://www.linkedin.com/in/rachelcytron/"],
                ["Rhea Wong", "Rhea Wong Consulting",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png", "https://www.linkedin.com/in/rhea-wong-4817465/"],
                ["Rochelle Sinclair",	"OneGoal", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png", "https://www.linkedin.com/in/remsinclair/"],
                ["Ruth Genn", "Literacy Academy Collective", "Co-Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Genn.png", "https://www.linkedin.com/in/ruth-genn-66b1a35/"],
                ["Ruth Rathblott, MSW", "RuthRathblott.com", "TEDx Speaker, Author, DEI Consultant", "https://wlc-member-photos.s3.amazonaws.com/RuthRathblott.png", "https://www.linkedin.com/in/ruth-rathblott/"],
                ["Salma Muro", "Christadora", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SalmaMuro.png", "https://www.linkedin.com/in/salmac"],
                ["Saskia Traill", "ExpandED Schools", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/SaskiaTraill.png", "https://www.linkedin.com/in/saskia-traill-77bbba1/"],
                ["Sharon Sewell-Fairman", "Workforce Professionals Training Institute","CEO", "https://wlc-member-photos.s3.amazonaws.com/SharonSewellFairman.png", "https://www.linkedin.com/in/sharon-sewell-fairman-896515b/"],
                ["Shauwea Hamilton", "Bottom Line","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ShauweaHamilton.png", "https://www.linkedin.com/in/shauwea/"],
                ["Shivonne McKay", "CHiPS","Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Shivonne+McKay.png", "https://www.linkedin.com/in/shivonne-mckay/"],
                ["Simone Jhingoor", "Jahajee Sisters",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SimoneJhingoor.png", "https://www.linkedin.com/in/simonejhingoor/"],
                ["Tara Gardner", "Day Care Council of New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TaraGardner.png", "https://www.linkedin.com/in/tngardner/"],
                ["Tené Howard", "Sadie Nash",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TeneHoward.png", "https://www.linkedin.com/in/ten%C3%A9-a-howard-96512961"],
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
                                        linkedin={member[4]}
                                />
                        )
                }) }
                
            </div>
            </div>
        );
    }
}

export default Members;
