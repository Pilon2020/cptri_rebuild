import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/calendar.jsx';
import { HeaderBar, RaceHeader } from './components/HeaderBar.js';
import FooterBar from './components/FooterBar.js'
import About from './pages/about.jsx';
import Officers from './pages/officers.jsx';
import Join from './pages/join.jsx';
import Races from './pages/races.jsx';
import raceInfo from './components/raceInfo'; 
import RaceCourse from './pages/course.jsx'; // Import the new RaceCourse component
import RaceInfo from './pages/info.jsx';
import Results from './pages/results.jsx'
import NotFound from './pages/NotFound.jsx'

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

          {/* Generate routes for each race */}
          {Object.entries(raceInfo).map(([key, { component: RaceComponent }]) => (
            <React.Fragment key={key}>
              <Route path={`/races/${key}`} element={<RaceComponent />} />
              <Route path={`/races/${key}/course`} element={<RaceCourse />} /> {/* Use RaceCourse for course */}
              <Route path={`/races/${key}/info`} element={<RaceInfo />} />
              <Route path={`/races/${key}/:raceYear`} element={<Results />} />
              <Route path={`/races/${key}/404`} element={<NotFound />} />
            </React.Fragment>
          ))}

        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}
