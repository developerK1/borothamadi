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
            <p className="our-pride">Our school prides itself on having good relations with the community, its learners and their parents.  While parents may expect the school and its educators to provide the best education possible with the resources available to the school, parents must also assume responsibility for their children to assist the school in achieving this goal. </p>
          </div>
        </div>
        <aside className='center-col'>
          <h2 className='text-center'>PURPOSE OF THE LEARNERS CODE OF CONDUCT</h2>
          <p className='text-center'>The main purpose of the Learners Code of Conduct is to ensure that all learners, parents, educators, School Management Team and School Governing Body members are informed of the rules and regulations contained in the Code.  Furthermore, all stakeholders must be informed of the disciplinary procedures that may be taken against learners who do not adhere to the Code of Conduct. </p>
        </aside>
      </div>
    </section>
  )
}

export default CodeOfConduct;