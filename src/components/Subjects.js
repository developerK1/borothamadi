//BOOTSTRAP
import Col from 'react-bootstrap/Col';

const Subjects = ({ subject }) => {
  return (
    <Col className="flexy-col" lg={3} md={3} style={styles}>
        <img src={subject.img} alt="primary-school-subject" style={imgStyles}/>
        <h4>{subject.name}</h4>
    </Col>
  )
}

const styles = {
    padding : "3% 0%",
    marginBottom : "10px"
}
const imgStyles = {
    height : "300px",
    width : "230px",
    margin : "10px 0px"
}

export default Subjects;