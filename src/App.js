import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/calendar.jsx';
import HeaderBar from './components/HeaderBar.js';
import About from './pages/about.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <HeaderBar />
        </header>

        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/calendar' element={<Calendar />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
