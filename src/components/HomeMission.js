//MODULES
import {useContext} from 'react';
import  { businessDetails } from '../context/AppInforProvider';

//BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HomeMission = () => {

const AppInfo = useContext( businessDetails );

  return (
    <Container className="abt-cards" style={container}>
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
            <span className="material-symbols-outlined">cast_for_education</span>
            <Card.Body>
              <Card.Title style={cardTitle}>Our Vision</Card.Title>
                <ul>
                  {AppInfo.visionList.map(list => <li key={list}>{list}</li>)}
                </ul>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
          <Col lg={4} md={4}>
          <Card style={card}>
          <span className="material-symbols-outlined">support</span>
            <Card.Body>
              <Card.Title style={cardTitle}>Our Values</Card.Title>
              <Card.Text>
                {AppInfo.values}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
  )
}

const container = {
  minHeight : "65vh",
  width : "100",
  textAlign : "center",
  marginTop:"-40px",
}

const card = {
  minHeight : "300px"
}

const cardTitle = {
  fontSize : "32px",
  fontStyle : "italic"
}

export default HomeMission;