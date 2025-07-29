import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background layer with mountain and stars */}
      <div className="background-layer"></div>
      
      {/* Text layer */}
      <div className="text-container">
        <h1 className="peakd-text">
          <Typewriter
            options={{
              strings: ['peakd', '<span class="coming-soon">coming soon</span>'],
              autoStart: true,
              loop: true,
              delay: 200,
              cursor: '',
              deleteSpeed: 50
            }}
          />
        </h1>
      </div>
      
      {/* Social media logos */}
      <div className="social-logos">
        <a href="https://www.instagram.com/peakd.app/" target="_blank" rel="noopener noreferrer" className="social-logo">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@peakd.app" target="_blank" rel="noopener noreferrer" className="social-logo">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}

export default App;
