import Col from 'react-bootstrap/Col';

const StaffComponent = ({ teacher }) => {
  return (
    <Col lg={4} md={4} sm={6} className="staff {
      ">

      <img style={img} src={teacher.img} alt="" />
      <h5>{teacher.name}</h5>
      <p>Occupation : {teacher.occupation}</p>
      {teacher.occupation === "A Teacher" ? (<div className="center-col">
        <p>Grade : {teacher.grade}</p>
        {teacher.subject.map(item =>(
          <p>{item}</p>
        ))}
      </div>) : ""}
      {teacher.occupation === "The Principal" ? (<div className="center-col">
        <p>Grade : {teacher.grade}</p>
        {teacher.subject.map(item =>(
          <p>{item}</p>
        ))}
      </div>) : ""}
    </Col>
  )
}

const img = {
  height : "190px"
}

export default StaffComponent;