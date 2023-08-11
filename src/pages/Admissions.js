//MODULES
import {useContext,useState, useEffect} from 'react';
import AppInforProvider, { AdmissionDetails ,businessDetails,UniformDetails } from '../context/AppInforProvider';

//COMPONENTS
import SubjectsComp from '../components/Subjects';
import CostumBtn from '../components/CostumBtn';
import UniformSection from '../components/SchoolUniform';
import AdressForm from '../components/AdressForm';
import BoxedGallery from '../components/BoxedGallery';
import AdmisionProcess from '../components/AdmisionProcess';
import HeroCom from '../components/HeroCom';
import FreeAdmin from '../components/FreeAdmin';
import PopUpFun from '../components/popup/Funtionality';

//BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Admission = () => {

  //CONTEXT DETAILS
  const AppDetails = useContext( AdmissionDetails );
  const BusiDetails = useContext( businessDetails );
  const uniform = useContext(UniformDetails);

  //STATES
  const [subjects, setSubjects] = useState(AppDetails.subjects);
  const [AppDates, setAppDates] = useState(false);
  const [heroContents, setheroContents] = useState({
      heading : `Welcome to ${BusiDetails.bankName}`,
      btnText : `Contact US`,
      tag :  `${BusiDetails.vision}`
  });
  const [popup, setPopup] = useState(false);

  const nextYear = () => (new Date().getFullYear() + 1);


  useEffect(() => {
    let currentMonth = new Date().getMonth();

    
    if(currentMonth >= 7 ){
      setheroContents({
        heading : "APPLICATIONS NOW OPEN",
        btnText : "Download Form",
        tag : "Contact us for enquirys",
        imgSrc : "assets/carousels/classroom.png"
      });

      setAppDates(true)
    }else{
      setheroContents({
        heading: "APPLICATIONS CLOSED ",
        btnText : "Call Directly",
        tag : "WE LOVE TO HERE FROM YOU",
        imgSrc : "assets/carousels/painting.jpg"
      }); 

      setAppDates(false)
    }

    
  }, [])

  return (<> 
        <HeroCom childItem={heroContents}/>
        {/* =======================================
          END OF Hero
          START OF Admin process
          ======================================= */}
        <section className="container-fluid" id="admission-porcess">
          <div className="container">
            <Row>
                <AdmisionProcess />
                {/* <CostumBtn text="Download Form"/> */}
                <button onClick={()=>setPopup(true)} className='dow-btn' style={{
                  width : "190px",
                  height : "54px",
                  margin : "10px auto",
                  backgroundColor : "black",
                  color : "white",
                  fontWeight : "700"
                }}>Download Form</button>
            </Row>
          </div>
          {popup ? <PopUpFun popstateFunc={setPopup} currState={popup}/> : ""}
        </section>
         {/* =======================================
          END OF 
          START OF PROGRAMMS
          ======================================= */}
          <section id="anouncement">
            <article className="center-col">
              {AppDates ? (<aside>
                <h1>APPLICATIONS ARE</h1>
                <h4>NOW OPEN</h4>
                <p>FOR {nextYear()}</p>
                <p>AND CLOSE JANUARY {nextYear() + 1}</p>
              </aside>) :(
                <aside>
                  <h1>APPLICATION FOR {nextYear() - 1} CLOSED</h1>
                  <h4>APPLICATIONS OPEN AUGUST</h4>
                  <p>FOR {nextYear()}</p>
                  <p>AND CLOSE JANUARY {nextYear() + 1}</p>
                </aside>
              ) }
              
            </article>
          </section>
          {/* =======================================
          END OF NOTICE
          START OF FEES INFO
          ======================================= */}
          <FreeAdmin />
          {/* =======================================
          START OF FEES
          START PROGRAMMS
          ======================================= */}
          <section className="container-fluid">
            <div className="container">
              <h3>PROGRAMS</h3>
              <Row>
                {subjects.map(subject => (
                  <SubjectsComp subject={subject} key={subject.id}/>
                ))}
              </Row>
            </div>
          </section>
          {/* =======================================
            START OF FEES
            START PROGRAMMS
          ======================================= */}
          <UniformSection uniform={uniform} />
          {/* =======================================
            END  OF UNIFORM
            START FROM FORM
          ======================================= */}
          <AdressForm BusiDetails={BusiDetails}/>
          {/* =======================================
            END  OF FORM
            START FROM GALLERY
          ======================================= */}
          <BoxedGallery />
    </>
  )
}



export default Admission