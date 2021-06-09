import './App.css';
import FlightDetails from './components/FlightDetails/FlightDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import {Route,Switch} from 'react-router-dom';
import BookFlight from './components/BookFlight/BookFlight';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={props => <FlightDetails {...props}/>}/>
        <Route path="/bookflight" component={props => <BookFlight {...props}/>}/>
      </Switch>
     <Footer/> 
    </Router>
  );
}
export default App;
