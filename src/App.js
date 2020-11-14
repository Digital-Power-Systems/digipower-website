
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
         <Switch>
          <Route path="/" exact> 
              Home
            </Route>
            <Route path="/services">
              services
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/contact">
              contact
            </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
