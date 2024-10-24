import React, { Component } from 'react';
import MCard from './components/MCard.js'

export class Members extends Component {


    render() {
        const memberArray = [	
                ["Abja Midha",	"Volunteers of Legal Service",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AbjaMidha.png", "https://www.linkedin.com/in/abja-midha/"],
                ["Akilah King",	"Room to Grow",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AkilahKing.png", "https://www.linkedin.com/in/akilah-king-mph-2908b4b1/"],
                ["Alaina Daniels",	"Trans formative Schools",	"Co-Founder/Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AlainaDaniels.png", "https://www.linkedin.com/in/alaina-daniels-b1526213/"],
                ["Alba Rodriguez",	"YWCA of the City of New York",	"Co-Founder/Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AlbaRodriguez.png", "https://www.linkedin.com/in/alba-rodriguez-13a18315a/"],
                ["Alicia Hansen",	"NYC Salt",	"Founder and CEO", "https://wlc-member-photos.s3.amazonaws.com/AliciaHansen.png", "https://www.linkedin.com/in/aliciahansen/"],
                ["Alissa Cherry",	"Audre Lorde Project",	"Interim Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AlissaCherry.png", "https://www.linkedin.com/in/alissa-cherry/"],
                ["Alison Overseth", "Partnership for After School Education (PASE)", "CEO", "https://wlc-member-photos.s3.amazonaws.com/AlisonOverseth_update.png", "https://www.linkedin.com/in/alison-overseth-8a1b7253/"],
                ["Allison Hauser", "Girls on the Run NYC", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AllisonHauser.png", "https://www.linkedin.com/in/allisonehauser/"],
                ["Allison Shillingford", "Navigate the Maze to Achievement", "Founder/Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AllisonShillingford.png", "https://www.linkedin.com/in/allisonbonnershillingford/"],
                ["Allegra Fishel",	"Gender Equality Law Center",	"Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AllegraFishel.png", "https://www.linkedin.com/in/allegra-fishel-28988a41/"],
                ["Alyce Emory",	"Beyond Bold And Brave",	"Co-Founder/CEO", "https://wlc-member-photos.s3.amazonaws.com/AlyceEmory.png", "https://www.linkedin.com/in/leaufille/"],
                ["Amanda Alvarado-Frantz", "Family Beehive",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AmandaAlvaradoFrantz.png", "https://www.linkedin.com/in/amanda-frantz/"],
                ["Amanda Ebokosia", "The Gem Project, Inc.",	"Founder, CEO", "https://wlc-member-photos.s3.amazonaws.com/AmandaEbokosia.png", "https://www.linkedin.com/in/ebokosia"],
                ["Anastacia Kurylo", "Inform Your Community",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/AnastaciaKurylo.png", "https://www.linkedin.com/in/anastaciakurylo/"],
                ["Dr. Anju J. Rupchandani", "Zone 126",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AnjuRupchandani_update.png", "https://www.linkedin.com/in/anju-j-rupchandani-m-s-ed-b713707"],
                ["Ava Mateo", "18by Vote",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/AvaMateo.png", "https://www.linkedin.com/in/ava-mateo-70118b153/"],
                ["Barbara Glassman", "The Sylvia Center",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BarbaraGlassman.png", "https://www.linkedin.com/in/barbara-glassman/"],
                ["Betsy Cohen", "Youth Communication",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BetsyCohen_update.png", "https://www.linkedin.com/in/betsy-cohen-03079b2b"],
                ["Betsy Plum", "Riders Alliance",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/BetsyPlum.png", "https://www.linkedin.com/in/betsyplum/"],
                ["Carole Wacey", "Nontraditional Employment of Women (NEW)", "Interim President", "https://wlc-member-photos.s3.amazonaws.com/Carole+Wacey.png", "https://www.linkedin.com/in/carole-wacey-82397a160/"],		
                ["Carolyn Silver", "Futures and Options", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/CarolynSilver.png", "https://www.linkedin.com/in/carolynsilvernyc/"],
                ["Christina Oliver", "Classroom Inc", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristinaOliver.png", "https://www.linkedin.com/in/christina-oliver-a27a468/"],
                ["Christine O'Connell", "Riley's Way", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ChristineO'Connell.png", "https://www.linkedin.com/in/christineoconnell-phd"],
                ["Chymeka Olfonse", "Robin Hood Foundation", "Managing Director", "https://wlc-member-photos.s3.amazonaws.com/Chymeka+Olfonse.png", "https://www.linkedin.com/in/chymeka-olfonse-956aa2/"],
                ["Coleen Stevens Porcher", "Power of Two", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/ColeenStevensPorcher.png", "https://www.linkedin.com/in/coleenstevensporcher/"],
                ["Dahlia Goldenberg", "Dahlia Goldenberg Consulting",	"Consultant", "https://wlc-member-photos.s3.amazonaws.com/DahliaGoldenberg.png", "https://www.linkedin.com/in/dahliagoldenberg/"],
                ["Danae Mcleod", "Grace Outreach", "Chief Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/DanaeMcleod_update.png", "https://www.linkedin.com/in/danae-mcleod-ph-d-7337b2123/"],
                ["Danielle Guindo", "Read Alliance", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Danielle+Guindo.png", "https://www.linkedin.com/in/danielle-g-guindo-msw-598b634/"],
                ["Ebonie Simpson", "The Lower Eastside Girls Club of New York",	"Co-Executive Director Emeritus, Strategic Advisor", "https://wlc-member-photos.s3.amazonaws.com/EbonieSimpson.png", "https://www.linkedin.com/in/eboniesimpson"],
                ["Erasma Beras-Monticciolo",	"Tambora Dialogues",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/ErasmaMonticciolo_update.png", "https://www.linkedin.com/in/erasma-beras-monticciolo-33b26a6/"],
                ["Erica Doherty", "Literacy Trust", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/EricaDoherty.png", "https://www.linkedin.com/in/erica-doherty-7b61a977/"],
                ["Erica Hamilton", "The Memo I Never Got (MING)", "Founder", "https://wlc-member-photos.s3.amazonaws.com/Erica+Hamilton.png", "https://www.linkedin.com/in/ericadhamilton/"],
                ["Gabrielle Prisco", "",	"Consultant/Writer", "https://wlc-member-photos.s3.amazonaws.com/Gabrielle+Horowitz-Prisco.png", "https://www.linkedin.com/in/gabrielle-prisco-8441726b/"],
                ["Gayle Villani", "GO Project",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Gayle+Villani.png", "https://www.linkedin.com/in/gayle-villani-82247031/"],
                ["Gennifer Herley", "TransNewYork",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/GenniferHerley.png", "https://www.linkedin.com/in/dr-gennifer-herley-phd-8aa954b6/"],
                ["Jacki	Kelly",	"Hudson Guild", "Deputy Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jacki+Kelly.png", "https://www.linkedin.com/in/jacquelinekelly217/"],
                ["Janelle Bradshaw", "Public Prep Charter Schools",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/JanelleBradshaw.png", "https://www.linkedin.com/in/janelle-bradshaw-9554bb8/"],
                ["Jennifer Magida", "New York Peace Institute",	"CEO", "https://wlc-member-photos.s3.amazonaws.com/Jenn+Magida.png", "https://www.linkedin.com/in/jennifer-magida-9822455/"],
                ["Jessica Mingus", "Lineage Project", "Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/JessicaMingus.png", "https://www.linkedin.com/in/jessica-mingus-lmsw-5715209a/"],
                ["Jessica Greer Morris", "Brooklyn Community Pride Center", "Interim CEO", "https://wlc-member-photos.s3.amazonaws.com/JessicaGreerMorris.png", "https://www.linkedin.com/in/jessica-greer-morris-a089723/"],
                ["Jill Roche Gomez", "Hunts Point Alliance for Children", "Former Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Jill+Roche+Gomez.png", "https://www.linkedin.com/in/jill-roche-gomez-1999826/"],
                ["Kathleen Rubenstein", "Skadden Foundation",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/KathleenRubenstein.png", "https://www.linkedin.com/in/kathleen-rubenstein-83415125"],
                ["Kathrine Mott", "Gilder Lehrman Institute", "COO", "https://wlc-member-photos.s3.amazonaws.com/Katherine+Mott.png", "https://www.linkedin.com/in/kathrinemott/"],
                ["Katie Orenstein", "The OpEd Project", "CEO", "https://wlc-member-photos.s3.amazonaws.com/Katie+Orenstein.png", "https://www.linkedin.com/in/katieorenstein/"],
                ["Katy Gaul-Stigge", "Goodwill of NY & NJ","CEO", "https://wlc-member-photos.s3.amazonaws.com/KatyGaul.png", "https://www.linkedin.com/in/katy-gaul-stigge-278270a"],
                ["Kristen Baldwin", "Read Ahead", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Kristen+Baldwin.png", "https://www.linkedin.com/in/kristenebaldwin/"],
                ["Leah Cover", "Ruth's Refuge",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/LeahCover.png", ""],
                ["Lina Lee", "Communities Resist",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/LinaLee.png", ""],
                ["Lisa Holton",	"Holton Consulting", "Principal", "https://wlc-member-photos.s3.amazonaws.com/LisaHolton.png", "https://www.linkedin.com/in/lisa-holton-8608934/"],
                ["Lisa Rivera", "NYLAG", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/LisaRivera.png", "https://www.linkedin.com/in/lisa-rivera-465ba790/"],
                ["Lynne Holden", "Mentoring In Medicine, Inc", "CEO", "https://wlc-member-photos.s3.amazonaws.com/LynneHolden.png", "https://www.linkedin.com/in/lynne-holden-md-20562445/"],
                ["Marielys Divanne", "Educators For Excellence (E4E)",	"Executive Director - NY", "https://wlc-member-photos.s3.amazonaws.com/MarielysDivanne.png", "https://www.linkedin.com/in/marielys-divanne-06a54478/"],
                ["Marissa Martin", "The Advocacy Institute",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MarissaMartin.png", "https://www.linkedin.com/in/marissa-martin-lmsw-b10560a"],
                ["Marjorie Schulman", "NYC First",	"Vice President, Programs", "https://wlc-member-photos.s3.amazonaws.com/MarjorieSchulman.png", "https://www.linkedin.com/in/marjorie-schulman-3898487/"],
                ["Melisha Jackman", "Brooklyn Kindergarten Society", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MelishaJackman.png", ""],
                ["Melissa Aase", "University Settlement", "Chief Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/MelissaAase_update.png", "https://www.linkedin.com/in/melissa-aase-0943754/"],
                ["Michele Kotler", "Community-Word Project", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Michele+Kotler.png", "https://www.linkedin.com/in/michelekotler/"],
                ["Michelle Yanche", "Good Shepherd Services",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/MichelleYanche.png", "https://www.linkedin.com/in/michelle-yanche-1418934a"],
                ["Mika Dashman", "Restorative Justice Initiative",	"Founding Director", "https://wlc-member-photos.s3.amazonaws.com/MikaDashman.png", "https://www.linkedin.com/in/mika-dashman-7920237b/"],
                ["Molly Delano", "Futures Ignite", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Molly+Delano.png", "https://www.linkedin.com/in/molly-delano-b11ab416/"],
                ["Nancy Kleaver", "Dancing Classrooms", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NancyKleaver.png", "https://www.linkedin.com/in/nancykleaver/"],
                ["Nanda Prabhakar", "The Opportunity Hub", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NandaPrabhakar.png", "https://www.linkedin.com/in/nandaprabhakar"],
                ["Nolvia Delgado", "Kaplan Educational Foundation", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/NolviaDelgado.png", "https://www.linkedin.com/in/nolvialdelgado/"],
                ["Pagee Cheung", "Mesa Charter School",	"Founder and Co-ED", "https://wlc-member-photos.s3.amazonaws.com/PageeCheung.png", "https://www.linkedin.com/in/pagee-cheung-60732a64/"],
                ["Pam Haas", "Facing History and Ourselves",	"Executive Director, New York Region", "https://wlc-member-photos.s3.amazonaws.com/PamHaas.png", "https://www.linkedin.com/in/pam-haas-3273639/"],
                ["Pascale Leone", "Supportive Housing of New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/PascaleLeone.png", "https://www.linkedin.com/in/pascale-leone/"],
                ["Rachel Cytron", "Row New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/RachelCytron.png", "https://www.linkedin.com/in/rachelcytron/"],
                ["Rebecca Cohen", "Brooklyn Book Bodega",	"ED & Cofounder", "https://wlc-member-photos.s3.amazonaws.com/RebeccaCohen.png", "https://www.linkedin.com/in/cohenrebecca/"],
                ["Rebecca Williford", "Disability Rights Advocates",	"President & CEO", "https://wlc-member-photos.s3.amazonaws.com/RebeccaWilliford.png", "https://www.linkedin.com/in/rebecca-williford-57908720/"],
                ["Rhea Wong", "Rhea Wong Consulting",	"Founder", "https://wlc-member-photos.s3.amazonaws.com/Rhea+Wong.png", "https://www.linkedin.com/in/rhea-wong-4817465/"],
                ["Rochelle Sinclair",	"Arbor Rising", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Rochelle+Sinclair.png", "https://www.linkedin.com/in/remsinclair/"],
                ["Ruth Genn", "Literacy Academy Collective", "Co-Founder and Executive Director", "https://wlc-member-photos.s3.amazonaws.com/Ruth+Genn.png", "https://www.linkedin.com/in/ruth-genn-66b1a35/"],
                ["Ruth Rathblott, MSW", "RuthRathblott.com", "TEDx Speaker, Author, DEI Consultant", "https://wlc-member-photos.s3.amazonaws.com/RuthRathblott.png", "https://www.linkedin.com/in/ruth-rathblott/"],
                ["Salma Muro", "Christodora", "Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SalmaMuro.png", "https://www.linkedin.com/in/salmac"],
                ["Saskia Traill", "ExpandED Schools", "President & CEO", "https://wlc-member-photos.s3.amazonaws.com/SaskiaTraill.png", "https://www.linkedin.com/in/saskia-traill-77bbba1/"],
                ["Sharon Sewell-Fairman", "Workforce Professionals Training Institute","CEO", "https://wlc-member-photos.s3.amazonaws.com/SharonSewellFairman_update.png", "https://www.linkedin.com/in/sharon-sewell-fairman-896515b/"],
                ["Sheila Duke", "Roads to Success","Chieft Executive Officer", "https://wlc-member-photos.s3.amazonaws.com/SheilaDuke.png", "https://www.linkedin.com/in/sheiladuke/"],
                ["Shivonne McKay Annan", "The Council of Churches of Greater Bridgeport, Inc.","President & CEO", "https://wlc-member-photos.s3.amazonaws.com/Shivonne+McKay.png", "https://www.linkedin.com/in/shivonne-mckay/"],
                ["Simone Jhingoor", "Jahajee Sisters",	"Co-Executive Director", "https://wlc-member-photos.s3.amazonaws.com/SimoneJhingoor.png", "https://www.linkedin.com/in/simonejhingoor/"],
                ["Tara Gardner", "Day Care Council of New York",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TaraGardner.png", "https://www.linkedin.com/in/tngardner/"],
                ["Tené Howard", "Sadie Nash",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TeneHoward.png", "https://www.linkedin.com/in/ten%C3%A9-a-howard-96512961"],
                ["Tia Morris", "Teach For America",	"Executive Director - NY Region", "https://wlc-member-photos.s3.amazonaws.com/TiaMorris_update.png", "https://www.linkedin.com/in/tiamorris/"],
                ["Tiana Morrison", "Community of Unity",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/TianaMorrison.png", "https://www.linkedin.com/in/tiana-morrison-lmsw/"],
                ["Umbreen Bhatti", "Barnard College",	"Executive Director", "https://wlc-member-photos.s3.amazonaws.com/UmbreenBhatti.png", "https://www.linkedin.com/in/umbreenbhatti/"],
                ["Victoria Coker", "Bottom Line",	"Executive Director, New York", "https://wlc-member-photos.s3.amazonaws.com/VictoriaCoker.png", "https://www.linkedin.com/in/victoria-coker-213ba821/"],
                ["Yamilee Toussaint", "STEM From Dance",	"Founder & CEO", "https://wlc-member-photos.s3.amazonaws.com/YamileeToussaint.png", "https://www.linkedin.com/in/yamilee-toussaint/"],
                ]

        return (
        <div>
                 
            <h1 className="member-heading">2023-2024 WLC Membership</h1>

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
