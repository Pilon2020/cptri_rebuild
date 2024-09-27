import React from 'react';
import { useLocation } from 'react-router-dom';
import raceInfo from '../components/raceInfo'; // Ensure this path is correct

const RaceCourse = () => {
  const location = useLocation();
  const raceKey = location.pathname.split('/')[2]; // Get the race key from the URL
  const raceData = raceInfo[raceKey] || {};

  const isCourseView = location.pathname.endsWith('/course'); // Check if we're in the course view

  return (
    <div className={raceData.slug}>
      <h1>{raceData.title}</h1>
        <div>
          <h2>Course Details</h2>
          <p>{raceData.courseDescription || "Course details not available."}</p>
        </div>
    </div>
  );
};

export default RaceCourse;
