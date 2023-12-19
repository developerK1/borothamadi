//MODULES
import {useContext} from 'react';
import  { businessDetails } from '../context/AppInforProvider';

//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MissionVision = () => {

const AppInfo = useContext( businessDetails );

  return (
    <section className="abt-cards" style={container}>
      <div className="container">
        < Row>
          <Col lg={4} md={4}>
          <Card style={card}>
          <span className="material-symbols-outlined">other_admission </span>
            <Card.Body>
              <Card.Title style={cardTitle}>Our Mission</Card.Title>
              <Card.Text>
                {AppInfo.mission}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={4}>
            <Card style={{card}}>
            <span class="material-symbols-outlined">cast_for_education</span>
            <Card.Body>
              <Card.Title style={cardTitle}>Our Vision</Card.Title>
              <Card.Text>
               {AppInfo.vision}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={4}>
          <Card style={card}>
          <span class="material-symbols-outlined">support</span>
            <Card.Body>
              <Card.Title style={cardTitle}>Our Values</Card.Title>
              <ul>
                  {AppInfo.visionList.map(list => <li key={list}>{list}</li>)}
                </ul>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </div>
        </section>
  )
}

const container = {
  minHeight : "90vh",
  width : "100",
  textAlign : "center",
  display :"flex",
  justifyContent : "center",
  alignItems :"center"
}

const card = {
  minHeight : "300px"
}

const cardTitle = {
  fontSize : "32px",
  fontStyle : "italic"
}

export default MissionVision;