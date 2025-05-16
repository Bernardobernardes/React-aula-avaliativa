import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BanhoTosa from './pages/BanhoTosa';
import HotelResort from './pages/HotelResort';
import Adestramento from './pages/Adestramento';
import NavBarMenu from './pages/NavBarMenu';


function App() {
  return (
    <Router>

    <NavBarMenu />

      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/banhoTosa'  element={<BanhoTosa /> }/>
        <Route path='/hotelResort' element={<HotelResort /> } />
        <Route path='/adestramento' element={<Adestramento /> } />
      </Routes>
    </Router>
  );
}

export default App;
