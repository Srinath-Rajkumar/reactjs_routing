// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Dashboard from './Dashboard';
import UserDetails from './UserDetails';

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear login status from local storage
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!isLoggedIn && (
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          )}
            {!isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/userdetails">User Details</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {!isLoggedIn && <Route path="/contact" element={<Contact />} />}
          <Route path="/login" element={<Login />} />
          {isLoggedIn && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/userdetails" element={<UserDetails />} />
            </>
          )}
        </Routes>
      </div>
    
  );
};

export default App;
