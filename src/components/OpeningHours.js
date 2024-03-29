//BOOTSTRAP
import Row from 'react-bootstrap/Row';

const OpeningHours = () => {
    return (
        <section style={Section} id="opening-hours">
            <div className="container" style={{
                margin : 'auto'
            }}>
                <Row>
                    <article className="col-lg-6 col-md-6 left" style={articles} >
                        <h2 style={{
                            fontSize : "42px",
                            fontStyle : "italic",
                            textShadow : "2px 1px 3px black",
                        }}>GRADE 1 to 7</h2>
                        <div className="center-col">
                        <h4 style={{
                            fontSize : "34px",
                        }}>MONDAY - THURSDAY</h4>
                            <p style={{
                                fontSize : "26px",
                                textShadow : "2px 1px 3px black",
                                margin : "15px 0px",
                            }}>07:30 - 14:30</p>
                        </div>
                        <div className="center-col">
                            <h4 style={{
                                fontSize : "34px",
                            }}>FRIDAY</h4>
                            <p style={{
                                fontSize : "26px",
                                textShadow : "2px 1px 3px black",
                                margin : "15px 0px",
                            }}>07:30 - 13:30</p>
                        </div>
                    </article>
                    <article className="col-lg-6 col-md-6 right" style={articles}>
                        <h2 style={{
                            fontSize : "42px",
                            fontStyle : "italic",
                            textShadow : "2px 1px 3px black"
                        }}>FOUNDATION PHASE</h2>
                        <div className="center-col">
                            <h4 style={{
                                fontSize : "34px",
                            }}>MONDAY - THURSDAY</h4>
                            <p style={{
                                fontSize : "26px",
                                textShadow : "2px 1px 3px black",
                                margin : "15px 0px",
                            }}>07:30 - 13:00</p>
                        </div>
                        <div className="center-col">
                            <h4 style={{
                                fontSize : "34px",
                            }}>FRIDAY</h4>
                            <p style={{
                                fontSize : "26px",
                                textShadow : "2px 1px 3px black",
                                margin : "15px 0px",
                            }}>07:30 - 12:30</p>
                        </div>
                    </article>
                </Row>
            </div>
        </section>
    )
  }
  
  const Section = {
    minHeight : "100vh",
    width : "100%",
    textAlign : "center",
    backgroundImage : 'url("assets/other/numbers.jpg")',
    backgroundSize : "cover" ,
    backgroundPosition : "center",
    display : 'flex'
  }

  const articles = {
    padding : "3% 0px",
  }

  export default OpeningHours;



