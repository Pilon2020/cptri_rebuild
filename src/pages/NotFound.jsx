// src/pages/NotFound.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import raceInfo from '../components/raceInfo';

const NotFound = () => {
  const location = useLocation();
  const raceKey = location.pathname.split('/')[2]; // Extract the race key from the URL
  const raceData = raceInfo[raceKey] || {};

  // Determine if the URL is a race URL
  const isRaceURL = !!raceData.title;

  return (
    <div className={`not-found ${raceData.slug || ''}`}>
      {isRaceURL ? (
        <>
          <h1>404 - Race Page Not Found</h1>
          <p>Sorry, It looks like registration for this race isn't open yet. Check back soon to see when it opens.</p>
          <p>Sign up for our mailing list to get notified when registration opens.</p>
          <Link to="/races">NEED TO ADD A MAILING LIST HERE</Link>
          <Link to={`/races/${raceKey}`} className="home-link">Go back to {raceData.title || 'Race'} Home</Link>
        </>
      ) : (
        <>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="home-link">Go back to Home</Link>
        </>
      )}
    </div>
  );
};

export default NotFound;
