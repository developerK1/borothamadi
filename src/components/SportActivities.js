//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SportActivities = () => {
  return (
    <section className="container-fluid" id="sport-activity">
      <div className="container">
        <h3>SPORT & ACTIVITIES</h3>
        <Row>
            <Col lg={6} md={6} className="center-col">
              <h5>Long Jump</h5>
              <img src="assets/sports/long.jpg" alt="long-jump" />
            </Col>
            <Col lg={6} md={6} className="center-col">
              <h5>Soccer</h5>
              <img src="assets/sports/soccer.jpg" alt="long-jump" />
            </Col>
        </Row>
      </div>
    </section>
  )
}

export default SportActivities;