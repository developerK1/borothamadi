import { v4 as uuidv4 } from 'uuid';

export const schoolInfo = {
    name : "Borothamadi Primary School",
    motto : "Thuto Lore",
    mission : "To revive culture of teaching and learning to ICT world and outcome-based education. To have development initiatives to pupils to become global citizens. To create more safe learning institution which promote lifelong learning. To produce well rounded scholars strive for academic excellence.",
    // mission : "To establish and maintain an educational programme to enrich the capabilities of socially, economically and or politically disadvantaged children within the primary phase of schooling.And develop language and perceptual skills of such children while nurturing initiative and self-confidence. To assist pupils in to obtain entry into school on successful completion of their curricula.",
    vision :"Provide career-orientated quality education and excellence.Our objective  is to meet the needs of parents and children in the most effective way possible, which means that the teachers make a unique contribution, using initiative and individuality to maintain a caring and effective teaching environment.",
    longText : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    values : "Borothamadi Primary School is proud to be the having Positive Behavioural Interventions and Supports, and is a behaviour modification program which uses positive reinforcement rather than punitive measures to encourage good behaviour.",
    visionList : ["Be Safe", "Be Respectful", "Be responsible", "be Helpful","Lifelong learning Institution"],
    history : ["Borothamadi Primary School is a school initiated in 1987 in Borothamadi, Dinokana Village response to the growing crisis in education and the inability of parents to obtain adequate education for their children.",""],
    contacts : {
        phone : "073 177 2940",
        adress : {
        province : "North West",
        town : "Zeerust",
        section : "Dinokana",
        postalCode : 2868, 
        village :  "Borothamadi"
      },
      email : "Borothamadischoolps@gmail.co.za",
      stringedLocation : "Dinokana , Borothamadi , 2868"
    },
    packs : {
      tranport : "For afar pupils we find a suitable and a resposibile transport .",
      breakfast : "We provide morning dish to all our learner.",
      computer : "We provide computer litercy lessons to equipe our pupils with skill need in this digital era.",
      healthyMenu : "We privde ourselves by serving our learner with healthy menu changes."
    },
     
}

export const CommuniChannels = [
  {id:uuidv4(),name:"Phone", img:"assets/icons/tell.png" , detail:schoolInfo.contacts.phone},
  {id:uuidv4(),name:"Email", img:"assets/icons/email.png" , detail:schoolInfo.contacts.email},
  {id:uuidv4(),name:"Adress", img:"assets/icons/location.jpg" , detail:schoolInfo.contacts.stringedLocation}
]

export const forAdmision = {
    schoolFees : "R200",
    regFees : "R100",
    donations : {
        bankName : "African Bank",
        bankAccount : "35 242 1232",
        bankCode : "0302"
    },
    subjects : [
      {id:uuidv4(),name:"Setswana (HL)", img:"assets/subjects/setswana.jpg"},
      {id:uuidv4(),name:"English (FAL)", img:"assets/subjects/english.jpg"},
      {id:uuidv4(),name:"Mathematics", img:"assets/subjects/mathematics.jpg"},
      {id:uuidv4(),name:"Technology", img:"assets/subjects/technology.jpg"},
      {id:uuidv4(),name:"Natural Sciences", img:"assets/subjects/naturalscience.jpg"},
      {id:uuidv4(),name:"Creative Arts", img:"assets/subjects/artculture.jpg"},
      {id:uuidv4(),name:"Social Sciences", img:"assets/subjects/socialsceince.jpg"},
      {id:uuidv4(),name:"Life Orientations", img:"assets/subjects/lifeoreintations.jpg"}
     ]
}

export const uniforms = {
  ForBoth : {
    ShirtImg : ["assets/uniform/yellowtshirt.png","assets/uniform/tshirt.png" ],
    TrousersImg : "",
    BinnieImg : "assets/uniform/beannie.png",
    Socks : ["assets/uniform/whitesocks.png", "assets/uniform/whitesocks.png"],
    ShoeImg : ["assets/uniform/buccaneer.jpg", "assets/uniform/buccaneerboy.jpg"],
    Sport : {
      TshirtImg : "assets/uniform/whitesocks.png",
      ShortPantsIMg : "assets/uniform/whitesocks.png"
    }
  },
  forGirls : {
    girlUni : "assets/uniform/whitesocks.png",
    skirt : "assets/uniform/skirt.png",
  },
  forBoy : {
    boyTrous  : "assets/uniform/tousor.png",
    boyUni  : "assets/uniform/whitesocks.png",
  },
}

export const CodeOfConduct = {
  learner : ["a) Be punctual.","b) Manage learner performance effectively and motivate learners to achieve realistic and meaningful personal goals.", "c) Always show respect and be professional towards colleagues.","d) Administer discipline correctly and with dignity.","e) Be sensitive to the needs of their learners and address learning difficulties in a positive manner.","f) Praise, encourage, recognise and reward learners who strive to achieve.","g) Create a classroom climate which is based on a learning partnership that makes education both relevant and stimulating. h) Set a positive example for their learners to follow.","i) Be aware of camera surveillance in the classrooms, corridors and play area and action can be taken according to visual and verbal evidence."],
  teacher : ["a) Educators must execute their duties with diligence, honesty and care at all times.","b) The interest and well fare of learners shall always come first, however, personal and professional development of educators as well as participation in professional bodies is appreciated with reasonability","c) Discipline in the classroom should be done in accordance with the learner’s code of conduct of the school. The learner’s records of behavior must be kept by every class educator.","d) All educators must contribute to the improvement of the school environment, talent development/ nurturing and general skills development of every learner of our school.","e) Class teachers must establish general classroom rules with their learners at the beginning of every academic year and ensure that such are known by every learner by heart.","f) Classroom rules must reflect the general school rules as well as the school code of conduct for the learners.","g )Manage the learning process and the learning environment enthusiastically and professionally.","h) Every educator must belong to a committee within the school."],
}

export const HeroImages = {
  contImg : "assets/carousels/telephone.jpg",
  partImg : "assets/carousels/classroom.png",
  learnImg : "assets/carousels/wallpaper.jpg",
}