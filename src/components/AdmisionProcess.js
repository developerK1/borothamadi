//BOOTSTRAP
import Col from 'react-bootstrap/Col';

const AdmisionProcess = () => {
    return (<>
        <h3>Admissions Process</h3>
            <Col lg={6} md={6} sm={12} className='article'>
                <aside className="flexy-cen">
                    <img src="assets/admission/clipboard.png" alt="form" />
                    <div className="flexy-col">
                        <h5>Required Documents</h5>
                        <ul className="center-col">
                            <li>Certified Copy Birth Certificate</li>
                            <li>Previous Report</li>
                            <li>Motivational Letter</li>
                            <li>School Applications Form</li>
                            <li>Parent’s identity documents</li>
                        </ul>
                    </div>
                </aside>
            </Col>
        <Col lg={6} md={6} sm={12} className='article'>
            <aside className="flexy-cen">
                <img src="assets/admission/form.jpg" alt="form" />
                <div className="flexy-col">
                    <h5>Application Process</h5>
                    <ul className="center-col">
                        <li>Download From</li>
                        <li>Fill it with black pen</li>
                        <li>Return documents before </li>
                        <li>Closing dates</li>
                    </ul>
                </div>
            </aside>
        </Col>
    </>
    )
  }
  
  export default AdmisionProcess;

