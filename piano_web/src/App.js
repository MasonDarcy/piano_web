import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import TopNavBar from './components/TopNavBar';
import Home from './components/Home';
import Basics from './components/Basics';
import Pricing from './components/Pricing';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <TopNavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;