//MODULES
import {useContext} from 'react';
import  { businessDetails ,CommuniChannels, CommiDetails , HeroImagesDetails} from '../context/AppInforProvider';

//COMONENTS
import ContactsIcons from '../components/ContactsIcons';
import Form from '../components/Form';
import HeroCom from '../components/HeroCom';
import Map from '../components/Map';
import ContactMission from '../components/ContactMission';


const Contact = () => {

  //CONTEXT
  const BusiDetails = useContext( businessDetails );
  const fourItems = useContext(CommiDetails);
  const heroImgs = useContext(HeroImagesDetails);

  //Hero BTN HANLDER
  const heroBtnHandler = () =>{
    console.log("from Learner contacts...")
  }

  //Hero Contents
  const heroContents = {
    heading: "GET IN TOUCH WITH US",
    btnText : "Call Directly",
    tag : "WE LOVE TO HERE FROM YOU",
    imgSrc : "assets/carousels/telephone.jpg",
    clickerHandler : "call",
  }

  return (<>
    <HeroCom childItem={heroContents} heroBtnHandle={heroBtnHandler}/>
    {/* =======================================
          END OF NOTICE
          START OF ContactsIcons
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
          END     ContactsIcons
          START   ContactForm
          ======================================= */}
      <Form />
       {/* =======================================
          END     ContactForm
          START   ContactForm
          ======================================= */}
        <ContactMission />
       {/* =======================================
          END     ContactForm
          START   ContactForm
          ======================================= */}
        <Map />
  </>)
}

export default Contact