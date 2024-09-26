import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../media/CP_team_logo.png";
import raceInfo from '../components/raceInfo';

export function HeaderBar() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const tabList = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Calendar", to: "/calendar" },
    { label: "Join", to: "/join" },
    { label: "Officers", to: "/officers" },
    { label: "Donate", href: "https://crowdfund.calpoly.edu/project/38339" },
  ];

  const racesTab = {
    label: "Races",
    dropdownItems: [
      { label: "Mustang Showdown", to: "/races/Mustang_Showdown" },
      { label: "March Triathlon Series", to: "/races/MarchTriathlonSeries" },
      { label: "Tour De Donut", to: "/races/TourDeDonut" },
      { label: "Heart and Soles", to: "/races/HeartandSoles" },
    ],
  };

  useEffect(() => {
    const currentIndex = tabList.findIndex((tab) => tab.to === currentPath);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="header-bar-container">
      <div className="header-bar-inner">
        <Link to="/" className="home-logo">
          <img src={logo} alt="Home" className="logo-img" />
        </Link>
        <nav className="nav">
          {/* Map through all tabs except the last item (Donate link) */}
          {tabList.slice(0, -1).map((tab, index) => (
            <Link
              key={index}
              to={tab.to}
              onClick={() => setValue(index)}
              className={`nav-link ${value === index ? "nav-link-active" : ""}`}
            >
              {tab.label}
            </Link>
          ))}

          {/* Races Button with Dropdown on Hover */}
          <div className="dropdown">
            <Link
              to="/races"
              className={`dropbtn nav-link ${
                value === tabList.length - 1 ? "nav-link-active" : ""
              }`}
              onClick={() => setValue(tabList.length - 1)} // Set active state
            >
              {racesTab.label}
            </Link>
            <div className="dropdown-content">
              {racesTab.dropdownItems.map((dropdownItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={dropdownItem.to}
                  className="nav-dropdown-item"
                  onClick={() => setValue(tabList.length)} // Set active state for Races
                >
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Render the last item (Donate link) */}
          <a
            href={tabList[tabList.length - 1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {tabList[tabList.length - 1].label}
          </a>
        </nav>
      </div>
    </div>
  );
}

export function RaceHeader() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const raceKey = currentPath.split("/")[2]; // Adjust this to get the correct race key
  const raceData = raceInfo[raceKey] || {};

  const tabList = [
    { label: raceData.title || "Race", to: `/races/${raceKey}` },
    { label: "Course", to: `/races/${raceKey}/course` },
    { label: "Info", to: `/races/${raceKey}/info` },
    { label: "Register", href: raceData.registerLink || "#" }, // External link for Register
  ];

  const racesTab = {
    label: "Results",
    dropdownItems: raceData.years || [],
  };

  useEffect(() => {
    const currentIndex = tabList.findIndex((tab) => tab.to === currentPath);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath]);

  return (
    <div className="header-bar-container">
      <div className="header-bar-inner">
        <Link to="/" className="home-logo">
          <img src={logo} alt="Home" className="logo-img" />
        </Link>
        <nav className="nav">
          {tabList.map((tab, index) =>
            tab.href ? (
              <a
                key={index}
                href={tab.href}
                className={`nav-link ${value === index ? "nav-link-active" : ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tab.label}
              </a>
            ) : (
              <Link
                key={index}
                to={tab.to}
                onClick={() => setValue(index)}
                className={`nav-link ${value === index ? "nav-link-active" : ""}`}
              >
                {tab.label}
              </Link>
            )
          )}

          {/* Results Button with Dropdown (Non-clickable) */}
          <div className="dropdown">
            <span
              className={`dropbtn nav-link ${value === tabList.length - 1 ? "nav-link-active" : ""}`}
            >
              {racesTab.label}
            </span>
            <div className="dropdown-content">
              {racesTab.dropdownItems.map((dropdownItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={dropdownItem.to}
                  className="nav-dropdown-item"
                  onClick={() => setValue(tabList.length)}
                >
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}