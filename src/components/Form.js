//MODULES
import { useState } from 'react';

//COMPONENTS
import PopUpFun from './popup/Funtionality';

const Form = () => {

const [popup, setPopup] = useState(false);

  return (
    <section id="form-wrapper" className="center-cen" >
        <article className="contact-form">
            <aside>
                <label>Name</label>
                <input type="text" placeholder="Your name here..." required />
            </aside>
            <aside>
                <label>Number</label>
                <input type="tel" placeholder="Your numbers here..." required />
            </aside>
            <aside>
                <label>Subject</label>
                <input type="text" placeholder="Your topic here..." required />
            </aside>
            <aside>
                <label>Email</label>
                <input type="email" placeholder="Your email here..." required />
            </aside>
            <div className="center-col">
                <label>Body</label>
                <textarea rows="5" required ></textarea>
            </div>
            <aside className="flexy-cen">
                <button onClick={()=>setPopup(true)}>Send</button>
            </aside>
        </article>
        {popup ? <PopUpFun popstateFunc={setPopup} currState={popup}/> : ""}
    </section>
  )
}


const section = {
    backgroundImage : 'url("/assets/other/blackboard.png")',
    backgroundSize : "cover",
    backgroundPosition : "center"
}


export default Form;