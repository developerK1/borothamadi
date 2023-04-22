//MODULES
import {useContext} from 'react';
import { AdmissionDetails } from '../context/AppInforProvider';

//BOOTSTRAP
import Col from 'react-bootstrap/Col';

const AdminFees = () => {

//CONTEXT DETAILS
const AppDetails = useContext( AdmissionDetails );

  return (
    <section className="container-fluid" id="adminfees">
      <div className='container'>
        <div className='row'>
            <Col lg={6} md={6}>
              <article>
              <h4>TUITION FEES </h4>
                <ul>
                  <li>Registrations fee : {AppDetails.regFees}</li>
                  <li>School Fees : {AppDetails.schoolFees}</li>
                </ul>
              </article>
            </Col>
            <Col lg={6} md={6}>
              <article>
                <h4>DONATE FOR US</h4>
                <div>
                  <ul>
                    <li>Bank Name<span>     :</span> {AppDetails.donations.bankName}</li>
                    <li>Bank Account<span>  :</span> {AppDetails.donations.bankAccount}</li>
                    <li>Brance Code<span>   :</span> {AppDetails.donations.bankCode}</li>
                  </ul>
                </div>
              </article>
            </Col>
            <h2>YOUR DONATIONS WILL SAVE HIS/HER FUTURE</h2>
        </div>
      </div>
    </section>
  )
}

export default AdminFees