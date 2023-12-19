//MODULES
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppInforProvider, { businessDetails } from '../context/AppInforProvider';

//COMPONENTS
import CostumBtn from '../components/CostumBtn';
import Form from '../components/Form';
import HomeCarousel from '../components/HomeCarousel';
import BoxedGallery from '../components/BoxedGallery';
import HomeMission from '../components/HomeMission';


//BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  const AppInfo = useContext( businessDetails );
  const getDate = () => (new Date().getFullYear() + 1);


  return (
    <div>
      <section>
        <HomeCarousel />
      </section>
      {/* =======================================
          END OF HomeCarousel
          START OF Mission & Vsion
          ======================================= */}
        <HomeMission />
        {/* =======================================
          END OF Cards
          START OF Why Choose us
          ======================================= */}
        <Container id="why-choose" className="center-cen">
        <Row>
            <Col lg={5} md={6}>
              <img src="/assets/other/who.png" alt="borothamadi-primary" />
            </Col>
            <Col lg={6} md={6} className="why-choose">
              <h2>WHY US?</h2>
              <ul className="flexy-col">
                <li><span><img src="/assets/icons/arrow.png" alt="borothamadi-list"/></span> {AppInfo.packs.breakfast}</li>
                <li><span><img src="/assets/icons/arrow.png" alt="borothamadi-list"/></span> {AppInfo.packs.tranport}</li>
                <li><span><img src="/assets/icons/arrow.png" alt="borothamadi-list"/></span> {AppInfo.packs.computer}</li>
                <li><span><img src="/assets/icons/arrow.png" alt="borothamadi-list"/></span> {AppInfo.packs.healthyMenu}</li>
              </ul>
              <Row>
                <figure className="flexy-col">
                  <span> {getDate()}</span>
                  <Link to="admissions"><button>Admission</button></Link>        
                </figure>
              </Row>
            </Col>
        </Row>
        </Container>
        {/* =======================================
          END OF Why Choose us
          START OF Events and announcements
          ======================================= */}
        <Container id="recent-events" className="center-col">
          <div  className="container">
          <h2>RECENT EVENTS</h2>
          <Row> 
              <Col lg={6} md={6} className="center-col">
                <h3>Awards Ceremony</h3>
                <img src="assets/events/2023awards.jpg" alt="brothamadi-primary-awards"/>
              </Col>
              <Col lg={6} md={6} className="center-col">
                <h3>Sport Achievements</h3>
                <img src="assets/events/2023sport.jpg" alt="brothamadi-primary-sport"/>
              </Col>
          </Row>
          </div>
        </Container>
        {/* =======================================
          END OF Recent Events
          START OF Academical
          ======================================= */}
        <section className="container-fluid" id="acd-adm-abo">
          <div  className="container">
            <Row>
                <Col lg={4} md={4}>
                  <figure className="circle">
                    <span className="material-symbols-outlined">school</span>
                    <h4>Learners</h4>
                    <Link to="/learners"><button>Veiw</button></Link>
                  </figure>
                </Col>
                <Col lg={4} md={4}>
                  <figure className="circle">
                    <span className="material-symbols-outlined"> gate </span>
                    <h4>Admissions</h4>
                    <Link to="/admissions"><button>Veiw</button></Link>
                  </figure>
                </Col>
                <Col lg={4} md={4}>
                  <figure className="circle">
                  <span className="material-symbols-outlined"> lightbulb </span>
                    <h4>About</h4>
                  <Link to="/about"><button>Veiw</button></Link>
                  </figure>
                </Col>
            </Row>
          </div>
          </section>
          {/* =======================================
          END OF Academical
          START OF Form
          ======================================= */}
          <Form />
          {/* =======================================
          END OF Form
          START OF BoxedGallery
          ======================================= */}
          <BoxedGallery />
          {/* =======================================
          END OF BoxedGallery
          START OF NEWS
          ======================================= */}
          <section id="announcement"className="container-fuild">
            <div className="container">
              <h3>News & Announcements</h3>
                <Row>
                    <Col lg={5} md={5} className="center-col">
                      <img src="assets/other/principal.jpg" alt="borothamad-principal" width="460px"/>
                    </Col>
                    <Col lg={5} md={5} className="center-col left">
                      <h5>Principal Words</h5>
                      <div>
                        <p>{AppInfo.longText}</p>
                        <p>{AppInfo.longText}</p>
                        <p>{AppInfo.longText}</p>
                      </div>
                      <p>20 Mon, March 2023</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={5} md={5} className="center-col right">
                      <h5>Upcomming Farewel</h5>
                      <div >
                        <p>{AppInfo.longText}</p>
                        <p>{AppInfo.longText}</p>
                        <p>{AppInfo.longText}</p>
                      </div>
                      <p>22 Wed, March 2023</p>
                  </Col>
                  <Col lg={5} md={5} className="center-col">
                      <img src="assets/other/assembly.jpg" alt="borothamadi-pupil" width="460px"/>
                    </Col>
                </Row>
             </div>
          </section>
    </div>
  )
}

export default Home