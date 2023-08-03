import {Link} from 'react-router-dom';


const NavBar = ({toggleNav , setToggleNav}) => {

  return (
    <header >
        <nav className="center-cen">
            <img src="logo.jpg" alt="borothamadi-logo" className="logo"/>
            <ul className={toggleNav ?  'show' : ""}>
                <li onClick={()=>setToggleNav(false)}><Link to="/">Home</Link></li>    
                <li onClick={()=>setToggleNav(false)}><Link to="/about">About</Link></li>    
                {/* <li onClick={()=>setToggleNav(false)}><Link to="/academics">Academics</Link></li>     */}
                <li onClick={()=>setToggleNav(false)}><Link to="/admissions">Admissions</Link></li>    
                <li onClick={()=>setToggleNav(false)}><Link to="/learners">Learner</Link></li>    
                <li onClick={()=>setToggleNav(false)}><Link to="/parents">Parents</Link></li>    
                <li onClick={()=>setToggleNav(false)}><Link to="/contact">Contact Us</Link></li>    
            </ul>
            <div id="hamburger" >
              {toggleNav ? (
               <h3 onClick={()=>setToggleNav(false)}>X</h3>
              ) :(<aside onClick={()=> setToggleNav(true)}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </aside>)}
            </div>
        </nav>
       
    </header>
  )
}

export default NavBar