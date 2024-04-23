// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Profile from './Profile.jsx';
import AboutUs from './AboutUs.jsx';
import CreateBlog from './CreateBlog.jsx';
import { createBrowserHistory } from 'history';

import './styles.css';

const history = createBrowserHistory();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router history={history}>
      <div className="app">
        <header className="header">
          <button className="menu-btn" onClick={toggleMenu}>Menu</button>
          <h1>Blog Platform</h1>
        </header>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        <div className="content">
          <main>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/create-blog" element={<CreateBlog history={history} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;


/**
Git clone paste the URL from GitHub
Cd name of folder
git add .
Git commit -m' portfolio '
Git push origin main
 */
/*
 */