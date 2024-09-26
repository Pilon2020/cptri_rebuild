import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/calendar.jsx';
import { HeaderBar, RaceHeader } from './components/HeaderBar.js';
import About from './pages/about.jsx';
import Officers from './pages/officers.jsx';
import Join from './pages/join.jsx';
import Races from './pages/races.jsx';
import raceInfo from './components/raceInfo'; 

export default function App() {
  const location = useLocation();

  // Check if the current path starts with '/races/' but is not exactly '/races'
  const isRaceSubPage = location.pathname.startsWith("/races/") && location.pathname !== "/races";

  return (
    <div className="App">
      <header className="App-header">
        {/* Show RaceHeader for all /races/* subroutes except the exact /races route */}
        {isRaceSubPage ? <RaceHeader /> : <HeaderBar />}
      </header>

      <main className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/join" element={<Join />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/races" element={<Races />} />
          {Object.entries(raceInfo).map(([key, { component: RaceComponent }]) => (
          <Route key={key} path={`/races/${key}`} element={<RaceComponent />} />
        ))}
        </Routes>
      </main>
    </div>
  );
}
