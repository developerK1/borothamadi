import Col from 'react-bootstrap/Col';

const StaffComponent = ({ teacher }) => {
  return (
    <Col lg={4} md={4} sm={6} className="staff {
      ">
      <img style={img} src={teacher.img} alt="" />
      <h5>{teacher.name}</h5>
      <p>Occupation : {teacher.occupation}</p>
    </Col>
  )
}

const img = {
  height : "190px"
}

export default StaffComponent;