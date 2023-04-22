//MODULES
import {useContext} from 'react';
import  { businessDetails } from '../context/AppInforProvider';
import { Link } from 'react-router-dom';

const History = () => {

    const AppInfo = useContext( businessDetails );

  return (
    <section className="container-fluid" id="contact-mission">
        <div className="container">
            <div className="row">
            <article className="col-lg-6 col-md-6">
                    <div className="col">
                        <aside className='col-lg-8 col-md-8'>
                            <img src="assets/other/abc.jpg" alt="borothamadi-primary" />
                        </aside>
                        <aside className='col-lg-6 col-md-6'>
                            <img src="assets/other/chalk.jpg" alt="borothamadi-primary" />
                        </aside>
                    </div>
                </article>
                <article className="col-lg-4 col-md-4">
                    <h3>HISTORY</h3>
                    <p>{AppInfo.history}</p>
                    <p>{AppInfo.vision}</p>
                    <div className="flexy-cen btns">
                        <Link to="/admissions"><button>Admission</button></Link>
                        <Link to="/contact"><button>Contact</button></Link>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default History;