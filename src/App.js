import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BanhoTosa from './pages/BanhoTosa';
import HotelResort from './pages/HotelResort';
import Adestramento from './pages/Adestramento';
import NavBarMenu from './pages/NavBarMenu';
import Footer from './componentes/Footer'; // ajuste o caminho se estiver em outro lugar

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBarMenu />

        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/banhoTosa' element={<BanhoTosa />} />
            <Route path='/hotelResort' element={<HotelResort />} />
            <Route path='/adestramento' element={<Adestramento />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
