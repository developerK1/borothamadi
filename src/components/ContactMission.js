//MODULES
import {useContext} from 'react';
import  { businessDetails } from '../context/AppInforProvider';
import { Link } from 'react-router-dom';

const ContactMission = () => {

    const AppInfo = useContext( businessDetails );

  return (
    <section className="container-fluid" id="contact-mission">
        <div className="container">
            <div className="row">
                <article className="col-lg-6 col-md-6">
                    <h3>MISSION</h3>
                    <p>{AppInfo.mission}</p>
                    <p>{AppInfo.vision}</p>
                    <div className="flexy-cen btns">
                        <Link to="/admissions"><button>Admission</button></Link>
                        <Link to="/about"><button>About</button></Link>
                    </div>
                </article>
                <article className="col-lg-6 col-md-6 center-cen">
                    <div className="row">
                        <aside className='col-lg-6 col-md-6'>
                            <img src="assets/gallery/gallery8.jpg" alt="borothamadi-primary" />
                        </aside>
                        <aside className='col-lg-6 col-md-6'>
                            <img src="assets/gallery/gallery6.jpg" alt="borothamadi-primary" />
                        </aside>
                        <aside className='col-lg-6 col-md-6'>
                            <img src="assets/gallery/gallery1.jpg" alt="borothamadi-primary" />
                        </aside>
                        <aside className='col-lg-6 col-md-6'>
                            <img src="assets/gallery/gallery9.jpg" alt="borothamadi-primary" />
                        </aside>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default ContactMission