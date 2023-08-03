//MODULES
import { useState , useEffect } from 'react';
import CostumBtn from './CostumBtn';
import { Link } from 'react-router-dom';

//COMPONENTS
import PopUpFun from './popup/Funtionality'

const HeroCom = ({ childItem , heroBtnHandle }) => {

    const [popup, setPopup] = useState(false);

    const handleFunc = () =>{
      setPopup(true)
    }
  
    

    return (
      <section style={{
        height : "96vh",
        width : "100%",
        display : "flex",
        textAlign : "center",
        backgroundImage : `url(${childItem.imgSrc})`,
        backgroundSize : "cover" ,
        backgroundPosition : "center",
        position : "relative",
        overflow : "hidden"
      }} className="container-fluid" id="hero-comp">
        <article style={Article}>
            <h2>{childItem.heading}</h2>
            <p>{childItem.tag}</p>
            {/* <CostumBtn text={childItem.btnText} clickHandler={heroBtnHandle}/> */}
            <button onClick={handleFunc} style={{
              backgroundColor : "#ffb90a",
              color : "white",
              fontSize : "19px"
            }}>{childItem.btnText}</button>
        </article>
        {popup ? <PopUpFun popstateFunc={setPopup} currState={popup}/> : ""}
      </section>
    )
  }

  const Article = {
    height : "40vh",
    width : "100%",
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-evenly",
    margin : "auto"
  }

  export default HeroCom;