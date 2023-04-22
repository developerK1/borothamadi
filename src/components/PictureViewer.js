//BOOTSTRAP
import Col from 'react-bootstrap/Col';

const PictureViewer = ({images}) => {
 
  return (<>
       <Col lg={6} md={6}>
            <aside className='flexy-col' style={{justifyContent : "space-evenly"}}>
                <div className="flexy-cen">
                    <img src={images[0]} alt="borothamadi-primary" />
                    <img src={images[1]} alt="borothamadi-primary" />
                </div>
                <div className="flexy-cen"> 
                    <img src={images[1]} alt="borothamadi-primary" />
                    <img src={images[0]} alt="borothamadi-primary" />
                </div>
            </aside>
       </Col>
    </>)
}

export default PictureViewer;