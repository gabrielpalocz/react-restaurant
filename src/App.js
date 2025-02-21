import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Logo from './images/Logo.svg';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <div className="nav-container">
          <img src={Logo} alt="Little Lemon Logo" className="nav-logo" />
          <div>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/booking" className='nav-item'>Reservations</Link>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </main>
      <footer>
        <div className="footer" >
          <p>Little Lemon • © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
