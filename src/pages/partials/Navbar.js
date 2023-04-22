import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header >
        <nav className="center-cen">
            <img src="logo.jpg" alt="borothamadi-logo" className="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>    
                <li><Link to="/about">About</Link></li>    
                {/* <li><Link to="/academics">Academics</Link></li>     */}
                <li><Link to="/admissions">Admissions</Link></li>    
                <li><Link to="/learners">Learner</Link></li>    
                <li><Link to="/parents">Parents</Link></li>    
                <li><Link to="/contact">Contact Us</Link></li>    
            </ul>
        </nav>
       
    </header>
  )
}

export default NavBar