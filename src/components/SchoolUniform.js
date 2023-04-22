//BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SchoolUniform = ({uniform}) => {

  return (
    <section className='container-fluid' id="uniform">
        <div className="container">
            <Row>
                <Col lg={3} md={3}>
                    <h4>FOR GIRLS</h4>
                    <aside>
                        <div className='flexy-col left'>
                            <img src={uniform.ForBoth.ShirtImg[0]} alt="brothamadi-Shirt-img" />
                            <img src={uniform.forGirls.skirt} alt="borothamadi-primary-skirt" />
                        </div>
                    </aside>
                </Col>
                <Col lg={6} md={6}>
                    <h4>FOR BOTH</h4>
                    <Row className='flexy-cen both'>
                            <Col lg={6} md={6}>
                            <div className='flexy-cen'>
                                <img src={uniform.ForBoth.ShoeImg[1]} alt="brothamadi-Socks-img" />
                            </div>
                            <div className='flexy-cen'>
                                <img src={uniform.ForBoth.ShirtImg[0]} alt="brothamadi-Socks-img" />
                            </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className='flexy-col right'>
                                    <img src={uniform.ForBoth.ShirtImg[1]} alt="brothamadi-Shirt-img" />
                                    <img src={uniform.ForBoth.ShoeImg[0]} alt="brothamadi-Socks-img" />
                                </div>
                            </Col>
                    </Row>
                </Col>
                <Col lg={3} md={3}>
                    <h4>FOR BOYS</h4>
                    <aside>
                        <div className='flexy-col'>
                            <img src={uniform.ForBoth.ShirtImg[0]} alt="brothamadi-Shirt-img" />
                            <img src={uniform.forBoy.boyTrous} alt="borothamadi-primary-trousor" />
                        </div>
                    </aside>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default SchoolUniform;