
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


import ContactUs from './components/contact/ContactUs';
import Home from './components/Home/Home';
import ProductList from './components/Product-overview-HomePage/ProductOverviewList';


function App() {
  return (
    <div className="App">
     
      <Router>
      
        <NavBar />
        
         <Switch>
            <Route path="/" exact>
            <Home />
            <ProductList />
            </Route>
            <Route path="/services">
              <ProductList />
            </Route>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/contact">
             <ContactUs />
            </Route>
         </Switch>
         <Footer />
      </Router>
   
    </div>
  );
}

export default App;
