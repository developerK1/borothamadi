import React, { useEffect, useState } from 'react'

const Funtionality = ({ popstateFunc , currState }) => {
 

    const [counter, setCounter] = useState(3);

    const countDown = () => {
        if(counter > 0 ){
            setCounter(prev => prev -= 1);
        }
    }

    // useEffect(() => {
    //   const timmer = setInterval(countDown, 1000)
    
    //   return () => {
    //     setTimeout(()=>{
    //         clearInterval(timmer);
    //     }, 3000)
    //   }
    // }, [currState])


  return (
    <div style={{
        width  : "100%",
        height : "100%",
        display : "flex" ,
        justifyContent : "center",
        alignItems :"center",
        position : "fixed",
        top : 0,
        left : 0,
    }} id="funct-modal">
        <article className='center-col'>
            <aside className='center-cen close'>
                <figure className="close-div"><span onClick={()=>popstateFunc(false)}>Close</span></figure>
            </aside>
            <h3>Functionality Not Set</h3>
        </article>
    </div>
  )
}

export default Funtionality