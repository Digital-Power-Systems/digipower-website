
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


import ContactUs from './components/contact/ContactUs';
import Home from './components/Home/Home';
import ProductOverviewList from './components/Product-overview-HomePage/ProductOverviewList';
import ProductsContainer from './components/Products/ProductsContainer';

import { Provider } from 'react-redux';
import store  from './redux/store/store'

function App() {
  return (
    // Adding redux provider here
    <Provider store={store}>  
      <div className="App">
        <Router>

          <NavBar />

          <Switch>
            <Route path="/" exact>
              <Home />
              <ProductOverviewList />
            </Route>
            <Route path="/services" component={ProductsContainer} />


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
    </Provider>
  );
}

export default App;
