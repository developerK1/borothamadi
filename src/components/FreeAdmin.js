//MODULES
import {useContext} from 'react';
import { AdmissionDetails } from '../context/AppInforProvider';

//BOOTSTRAP
import Col from 'react-bootstrap/Col';

const FreeAdmin = () => {

//CONTEXT DETAILS
const AppDetails = useContext( AdmissionDetails );

  return (
    <section className="container-fluid" id="adminfees">
      <div className='container'>
        <div className='row'>
            <Col lg={6} md={6}>
              <article>
              <h4>TUITION FEES </h4>
              <p>SCHOOL FEES : <span>R</span> 0.00</p>
                <p>Parents must agree to pay the compulsory School Fees as determined by the Trustees. Both Parents must indicate their agreement by signing the application form. In the case of divorced/separated Parents, it is the responsibility of the Parent applying for application at the School to obtain a signed copy of the application form from their divorced/separated partner. </p>
              </article>
            </Col>
            <Col lg={6} md={6}>
              <article>
                <h4>DONATE FOR US</h4>
                <p>SCHOOL ACCOUNT NUMBER CAN BE REQUESTED ON REQUEST</p>
              </article>
            </Col>
            <h2>YOUR DONATIONS WILL SAVE HIS/HER FUTURE</h2>
        </div>
      </div>
    </section>
  )
}

export default FreeAdmin