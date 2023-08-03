//MODULES
import {useContext} from 'react';
import  { CommiDetails, businessDetails} from '../context/AppInforProvider';

//COMPONENT
import HeroCom from '../components/HeroCom';
import ContactsIcons from '../components/ContactsIcons';
import OpeningHours from '../components/OpeningHours';
import AdressForm from '../components/AdressForm';
import BoxedGallery from '../components/BoxedGallery';
import CodeOfConduct from '../components/CodeOfConduct';
import AdminFees from '../components/FreeAdmin';

const Parents = () => {

  //CONTEXT
  const fourItems = useContext(CommiDetails);
  const BusiDetails = useContext( businessDetails );

  //Hero BTN HANLDER
  const heroBtnHandler = () =>{
    console.log("from Learner parent...")
  }

  //Hero Contents
  const heroContents = {
    heading: "LET'S BUILD THEM TOGETHER",
    btnText : "Email Us",
    tag : "TOGETHER WE CAN DO BETTER",
    imgSrc : "assets/carousels/classroom.png",
    clickerHandler : "email us",
  }

 

  return (
    <>
        <HeroCom childItem={heroContents} heroBtnHandle={heroBtnHandler}/>
        {/* =======================================
          END OF HeroCom START OF Opening Hours
          ======================================= */}
        <div className="container-fluid" style={{
          height : "15px",
          backgroundColor : "goldenrod",
          margin : "15px 0px",
          borderBottom : "3px solid red"
        }}></div>
        {/* =======================================
          END OF HeroCom START OF Opening Hours
          ======================================= */}
          <section className="container-fluid" id="contact-icons">
            <div className="container">
              <div className="row">
                {fourItems.map(item =>(
                  <ContactsIcons item={item} key={item.id} />
                ))}
              </div>
            </div>
        </section>
          {/* =======================================
          END OF OpeningHoursSTART OF Comunication
          ======================================= */}
          <div className="container-fluid" style={{
            height : "15px",
            backgroundColor : "goldenrod",
            margin : "15px 0px",
            borderTop : "3px solid red"
          }}></div>
          {/* =======================================
          END OF OpeningHoursSTART OF Comunication
          ======================================= */}
          < OpeningHours/> 
          {/* =======================================
          END OF Comunication START OF CodeOfConduct
          ======================================= */}
          < CodeOfConduct/>
          {/* =======================================
            END  OF UNIFORM START FROM FORM
          ======================================= */}
          <AdressForm BusiDetails={BusiDetails}/>
          {/* =======================================
            END  OF AdressForm  START FROM AdminFees
          ======================================= */}
          <AdminFees />
          {/* =======================================
            END  OF FORM  START FROM GALLERY
          ======================================= */}
          <BoxedGallery />
    </>
  )
}


export default Parents