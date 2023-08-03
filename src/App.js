
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState , useEffect } from 'react';
import AppInforProvider  from './context/AppInforProvider';

import Navbar from './pages/partials/Navbar';
import Footer from './pages/partials/Footer';

import About from './pages/About';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Learners from './pages/Learners';
import Parents from './pages/Parents';
import Contact from './pages/Contact';

// BOOTSTRAP 
import bootstrap from "../node_modules/react-bootstrap/dist/react-bootstrap";
import bootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  const [urlName, setUrlName] = useState('/');

  // function showURL(){
  //   let urlpath = [...window.location.href];
  //   const urlname = urlpath.slice(22,urlpath.length-1 ).join("").toUpperCase();


  //   console.log(urlpath)
  //   console.log(urlname)
  // }

useEffect(() => {
  setUrlName(window.location.href);
  console.log(urlName)
}, [urlName])


  return (
    <Router>
      <AppInforProvider>
    <div className="App">
      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <main className={toggleNav ? "navbar-open" : ""}>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/academics">
            <Academics />
          </Route>
          <Route path="/admissions">
            <Admissions />
          </Route>
          <Route path="/learners">
            <Learners />
          </Route>
          <Route path="/parents">
            <Parents />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
      </Switch>
      </main>
      <Footer />
    </div>
    </AppInforProvider>
    </Router>
  );
}

export default App;
