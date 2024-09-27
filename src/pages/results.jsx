// src/pages/Results.jsx
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import raceInfo from '../components/raceInfo'; // Ensure this path is correct

const Results = () => {
  const location = useLocation();
  const raceKey = location.pathname.split('/')[2]; // Get the race key from the URL
  const raceData = raceInfo[raceKey] || {};
  const raceYear = location.pathname.split('/')[3];

  // Check if the race year is valid
  const isValidYear = raceData.years?.some(year => year.label.includes(raceYear));

  // If the year is not valid, navigate to the NotFound component
  if (!isValidYear) {
    return <Navigate to={`/races/${raceKey}/404`} />;
  }

  return (
    <div className={raceData.slug}>
      <h1>{raceData.title} Results {raceYear}</h1>
      <div>
        <h2>Race Information</h2>
        <p>{raceData.courseDescription || "Course details not available."}</p>
      </div>
    </div>
  );
};

export default Results;
