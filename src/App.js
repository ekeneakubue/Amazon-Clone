import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Pages/Checkout/Checkout'
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <Router>      
        <div className="App">
          
          <Switch>
              <Route path='/login'>
                <Login />
              </Route>

              <Route exact path='/'>  
                <Header />          
                <Home />
                <Footer />
              </Route>

              <Route path='/checkout'>
                <Header />            
                <Checkout />              
              </Route>          
          </Switch>        
        </div>
      </Router>
  );
}

export default App;
