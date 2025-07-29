import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('peakd')
            .pauseFor(2000)
            .deleteAll()
            .typeString('coming soon')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
          delay: 100,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default App;
