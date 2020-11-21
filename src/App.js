
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer/Footer';

import  SolarPanel from './assets/Solar/SolarPanelGrid.jpg';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
         <Switch>
            <Route path="/" exact> 
              
              <img src={SolarPanel} alt ="Solar Panel grid" />
            </Route>
            <Route path="/services">
              services
            </Route>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/contact">
              contact
            </Route>
         </Switch>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
