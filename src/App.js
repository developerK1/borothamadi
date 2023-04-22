
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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




function App() {
  return (
    <Router>
      <AppInforProvider>
    <div className="App">
      <Navbar />
      <main>
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
