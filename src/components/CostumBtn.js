
const CostumBtn = ({ text , clickHandler }) => {
  return (
    <button style={styles} onClick={()=>clickHandler()}>{text}</button>
  )
}

const styles = {
  maxWidth : "200px",
  margin : "15px auto",
}

export default CostumBtn