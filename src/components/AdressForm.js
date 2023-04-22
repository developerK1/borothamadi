
//MODULES
import { useState } from 'react';

//COMPONENTS
import PopUpFun from './popup/Funtionality';
import ContactForm from './ContactForm';

const AdressForm = ({ BusiDetails }) => {

  const [popup, setPopup] = useState(false);

  const handler = () =>{
    setPopup(true)
  }

  return (
    <section className="container-fluid" id="adress-form">
      <div className="container">
      <h2>ANY ENQUIRY</h2>
        <article className="row">
          <div className="col-lg-6 col-md-6">
            <aside className="flexy-col">
              <div className="flexy-cen">
                  <img src="assets/icons/location.jpg" alt="location-icon" />
                  <div className='center-col'>
                    <h5>Location</h5>
                    <p>{BusiDetails.contacts.stringedLocation}</p> 
                  </div>
              </div>
              <div className="flexy-cen">
                <img src="assets/icons/email.png" alt="email-icon" />
                <div className='center-col'>
                    <h5>Email</h5>
                    <p>{BusiDetails.contacts.email}</p>
                  </div>
              </div>
              <div className="flexy-cen">
                <img src="assets/icons/tell.png" alt="tell-icon" />
                <div className='center-col'>
                    <h5>Phone</h5>
                    <p>{BusiDetails.contacts.phone}</p>
                  </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-6 col-md-6">
            <ContactForm handler={handler}/>
          </div>
        </article>
      </div>
      {popup ? <PopUpFun popstateFunc={setPopup} currState={popup}/> : ""}
    </section>
  )
}

export default AdressForm;