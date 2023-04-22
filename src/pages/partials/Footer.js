import {useContext} from 'react';
import { businessDetails } from '../../context/AppInforProvider';

//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

  const AppInfo = useContext(businessDetails);

  return (
    <footer className="contaimer-fluid">
      <div className="container">
        <Row>
            <Col lg={4} md={4}>
              <h5>Vision</h5>
              <p>{AppInfo.vision}</p>
            </Col>
            <Col lg={4} md={4} className="flexy-cen">
              <img src="assets/borothamadilogo.jpg" alt="borothamadi-logo" width="280px"/>
            </Col>
            <Col lg={4} md={4}>
              <h5>Contact Details</h5>
              <ul>
                <li>{AppInfo.contacts.phone}</li>
                <li>{AppInfo.contacts.email}</li>
                <li>{AppInfo.contacts.stringedLocation}</li>
                <li>{AppInfo.contacts.adress.town},{AppInfo.contacts.adress.province}</li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
  )
}

export default Footer;