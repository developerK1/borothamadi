//MODULES
import {useContext} from 'react';
import  { cocDetailes} from '../context/AppInforProvider';

//COMPNENTS
import Code from './Code';

const CodeOfConduct = () => {

  const codeDetails = useContext( cocDetailes );

  return (
    <section className="container-fluid" id="code-conduct">
      <div className="container">
        <h3>CODE OF CONDUCT</h3>
        <div className="row"> 
          <div className="col-lg-6 col-md-6">
            <Code codeDetails={codeDetails.teacher} heading="For Teachers"/>
          </div>
          <div className="col-lg-6 col-md-6">
            <Code codeDetails={codeDetails.learner} heading="For Learners"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeOfConduct;