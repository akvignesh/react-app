import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetails from './components/Moviedetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Home></Home>
      <Routes>
        <Route path='/' component={Home}>
        </Route>
        <Route path='/movie/:imdbID' component={MovieDetails}></Route>
        <Route  component={PageNotFound}></Route>
      </Routes>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
