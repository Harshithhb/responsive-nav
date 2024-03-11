import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">
          {/* Replace the following line with your dummy icon */}
          <img src="dummy-icon.png" alt="logo" />
        </div>
        <nav className={isMenuVisible ? 'visible' : 'hidden'}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; 
        </button>
      </header>
    
    </div>
  );
}

export default App;

