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
    {id :uuidv4(), name :"Mr Moremedi", occupation : "The Principal"  , img:"assets/staff/moremedi.jpg", subject : ["Natural Science"],grade : "4-7"},
    {id :uuidv4(), name :"Mr Thembe", occupation : "A Teacher"  , img:"assets/staff/thembe.png",subject : ["Foundation Phase"],grade : "R - 1"},
    {id :uuidv4(), name :"Mrs Lerakong", occupation : "A Teacher"  , img:"assets/staff/female.png",subject : ["Mathematics", "Languages"],grade : "4-7"},
    {id :uuidv4(), name :"Mrs Motshwane", occupation : "A Teacher"  , img:"assets/staff/female.png",subject : ["Economics", "Life Skills"],grade : "4-7"},
    {id :uuidv4(), name :"Mr Sebogodi", occupation : "A Teacher"  , img:"assets/staff/male.jpg",subject : ["Social Sciencs"],grade : "4-7"},
    {id :uuidv4(), name :"Mr Segakweng", occupation : "Administration"  , img:"assets/staff/female.png",subject : ["Social Sciencs"],grade : "4-7"}
  ])
  
  const [SGBs, setSGBs] = useState([
    {id :uuidv4(), name :"M Ditile", occupation : "Chairperson "  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"K Serite P", occupation : "D Chairperson"  , img:"assets/staff/male.jpg"},
    {id :uuidv4(), name :"M Makgetha", occupation : "Treasurer"  , img:"assets/staff/female.png"},
    {id :uuidv4(), name :"N Kasonkola", occupation : "Secretary"  , img:"assets/staff/female.png"},
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
            <Row className="center-cen">   
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
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <figure>
                    <p>Any person who teaches, educates or trains learners at the school who has been appointed by the GDE or the SGB of the school. </p>
                    <p>Person, usually an educator, appointed by the GDE to manage all educational and administrative functions of the school who is accountable to the GDE and SGB as determined by SASA and other legislation.  The professional management of the school lies with the principal. </p>
                  </figure>
                </div>
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