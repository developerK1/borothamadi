//MODULES
import { Link } from 'react-router-dom';

//COMPONENTS
import HeroCom from '../components/HeroCom';
import MissionVision from '../components/MissionVision';
import OpeningHours from '../components/OpeningHours';
import BoxedGallery from '../components/BoxedGallery';
import CodeOfConduct from '../components/CodeOfConduct';
import SportActivities from '../components/SportActivities';

const Learners = () => {

  //Hero BTN HANLDER
  const heroBtnHandler = () =>{
    console.log("from Learner contacts...")
  }

  //Hero Contents
  const heroContents = {
    heading: "LET'S BUILD THEM TOGETHER",
    btnText : "VISIT US",
    tag : "TOGETHER WE CAN DO BETTER",
    imgSrc : "assets/carousels/students.jpg",
    clickerHandler : "vist",
  }

  return (
    <div>
        {/* I can devide most section into parts of boxed of grades
        EXTRA MORAL ACTIVED I CA N JUST LIST THEM OUT IN CARD KINDA WAY */}
        <HeroCom childItem={heroContents} heroBtnHandle={heroBtnHandler}/>
        {/* =======================================
          END OF NOTICE START OF ContactsIcons
          ======================================= */}
          < MissionVision/>
        {/* =======================================
          END OF MissionVision START OF OpeningHours
          ======================================= */}
          <OpeningHours />
          {/* =======================================
          END OF OpeningHours START OF SportActivities
          ======================================= */}
          <SportActivities />
        {/* =======================================
          END OF SportActivities START OF CodeOfConduct
          ======================================= */}
          < CodeOfConduct/>
          {/* =======================================
          END OF OpeningHours START OF BoxedGallery
          ======================================= */}
          <BoxedGallery />
    </div>
  )
}


export default Learners