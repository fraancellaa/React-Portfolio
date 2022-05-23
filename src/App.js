import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    const navCategories = [
        { name: "About Me" },
        { name: "Portfolio"} ,
        { name: "Resume" },
        { name: "Contact" },
    ];
    
  return (
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;