import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../media/CP_team_logo.png";

export default function HeaderBar() {
  const [value, setValue] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const tabList = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Calendar", to: "/calendar" },
      { label: "Join", to: "/join" },
      {
        label: "Races",
        to: "/races",
        isDropdown: true,
        dropdownItems: [
          { label: "Mustang Showdown", to: "/races/Mustang_Showdown" },
          { label: "March Triathlon Series", to: "/races/MarchTriathlonSeries" },
          { label: "Tour De Donut", to: "/races/SloTDD" },
          { label: "Heart and Soles", to: "/races/HeartandSoles" },
        ],
      },
      { label: "Donate", to: "/donate" },
    ],
    []
  );

  useEffect(() => {
    const currentIndex = tabList.findIndex((tab) => tab.to === currentPath);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [currentPath, tabList]);

  const handleChange = (newValue) => setValue(newValue);

  const handleDropdownOpen = () => setIsDropdownOpen(true);

  const handleDropdownClose = () => setIsDropdownOpen(false);

  return (
    <div className="header-bar-container">
      <div className="header-bar-inner">
        {/* Image link to home page */}
        <Link to="/" className="home-logo">
        <img src={logo} alt="Home" className="logo-img" />
        </Link>
        <nav className="nav">
          {tabList.map((tab, index) =>
            tab.isDropdown ? (
              <div
                key={index}
                className="nav-dropdown"
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <Link
                  to={tab.to}
                  onClick={() => handleChange(index)}
                  className={`nav-link ${value === index ? "nav-link-active" : ""}`}
                >
                  {tab.label}
                </Link>
                {isDropdownOpen && (
                  <div className="nav-dropdown-menu">
                    {tab.dropdownItems.map((dropdownItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={dropdownItem.to}
                        onClick={() => {
                          handleChange(index);
                          setIsDropdownOpen(false); // Close dropdown after click
                        }}
                        className="nav-dropdown-item"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={tab.to}
                onClick={() => handleChange(index)}
                className={`nav-link ${value === index ? "nav-link-active" : ""}`}
              >
                {tab.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}