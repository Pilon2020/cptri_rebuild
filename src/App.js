import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/calendar.jsx';
import HeaderBar from './components/HeaderBar.js';
import About from './pages/about.jsx';
import Officers from './pages/officers.jsx';
import Join from './pages/join.jsx';
import Races from './pages/races.jsx';

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
            <Route path='/join' element={<Join />}/>
            <Route path='/officers' element={<Officers />} />
            <Route path='/races' element={<Races />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
