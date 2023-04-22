//MODULES
import {useContext,useState} from 'react';
import { businessDetails } from '../context/AppInforProvider';
import { v4 as uuidv4 } from 'uuid';

//COMPONENTS
import StaffComponent from '../components/StaffComponent';
import AboutCarousel from '../components/AboutCarousel';
import CodeOfConduct from '../components/CodeOfConduct';
import SportActivities from '../components/SportActivities';
import MissionVision from '../components/MissionVision';
import AboutBio from '../components/AboutBio';
import History from '../components/History';

//BOOTSTRAP
import Row from 'react-bootstrap/Row';


//IMAGES

const About = () => {
  
  const AppInfo = useContext(businessDetails);
  const [teachers, setTeachers] = useState([
    {id :uuidv4(), name :"Mr Riss", occupation : "The Principal "  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mr Plaatjie", occupation : "A Teacher"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr Plaatjie", occupation : "A Teacher"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr Plaatjie", occupation : "A Teacher"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr Plaatjie", occupation : "A Teacher"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr Plaatjie", occupation : "A Teacher"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs Goerge", occupation : "A Teacher " , img:"assets/staff/female.png"}
  ])
  
  const [SGBs, setSGBs] = useState([
    {id :uuidv4(), name :"Mr R", occupation : "Chairperson "  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mr P", occupation : "Secretary"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs G", occupation : "Treasurer"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr K", occupation : "Memeber"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"Mrs M", occupation : "Memeber"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"Mr S", occupation : "Memeber"  , img:"assets/staff/male.jpg"}
  ]);

  const viewerImgs = ["assets/uniform/grasshopper.jpg", "assets/uniform/buccaneer.jpg"];

  return (
    <div>
        <AboutCarousel />
        {/* =======================================
          END OF AboutCarousel
          START OF Welcome
          ======================================= */}
          <AboutBio />
       {/* =======================================
          END OF Welcome
          START OF Cards 
          ======================================= */}
        <MissionVision />
        {/* =======================================
          END OF Cards
          START OF HISTORY 
          ======================================= */}
        <History />
          {/* =======================================
          END OF HISTORY
          START OF Staff 
          ======================================= */}
        <section className='container-fluid' id="staff">
          <div className='container'>
            <h3>STAFF MEMBERS</h3>
            <Row>   
              {teachers.map(teacher =>(
                <StaffComponent teacher={teacher} key={teacher.id}/>
              ))}
            </Row>
          </div>
        </section>
          {/* =======================================
          END OF Staff
          START OF SGC

          (ADD A BIG PICTURE ABOUT HTE MOTTO TO DO OE DEVIDER)

          ======================================= */}
          <section className='container-fluid' id="sgb">
            <div className='container'>
              <h3>STAFF SGBS</h3>
              <Row>   
                {SGBs.map(SGBs =>(
                  <StaffComponent teacher={SGBs} key={SGBs.id}/>
                ))}
              </Row>
            </div>
          </section>
       {/* =======================================
          END OF SGB
          START OF CodeOfConduct
          ======================================= */}
          < CodeOfConduct/>
        {/* =======================================
        END OF COC
        START OF Sport 
        ======================================= */}
        < SportActivities/>
      {/* =======================================
        END OF Sport
        START OF Sport 
        ======================================= */}
    </div>
  )
}


export default About