import { v4 as uuidv4 } from 'uuid';

export const schoolInfo = {
    name : "Borothamadi Primary School",
    motto : " adipisci velit...,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    mission : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    vision :"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    longText : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    values : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    history : ["Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...","Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."],
    CodeLearners : ["Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...","Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."],
    CodeTeacher : ["Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...","Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."],
    contacts : {
        phone : "012 121 1112",
        adress : {
        province : "North West",
        town : "Zeerust",
        section : "Dinokana",
        postalCode : 2868, 
        village :  "Borothamadi"
      },
      email : "info@Borothamdischool.co.za",
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
  learner : [
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
  ],
  teacher : [
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur", 
  ]
}

export const HeroImages = {
  contImg : "assets/carousels/telephone.jpg",
  partImg : "assets/carousels/classroom.png",
  learnImg : "assets/carousels/wallpaper.jpg",
}