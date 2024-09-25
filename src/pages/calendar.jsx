import React, { useEffect, useState } from 'react';

// Replace with your actual API key and Calendar ID
const API_KEY = 'AIzaSyBWhpTlLVuOk8-DTsOMt8Y7rlnwZuR4nG8';
const CALENDAR_ID = '2rvnd4ielghnqi8m3i8dh31eq0@group.calendar.google.com';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [weekDates, setWeekDates] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const startOfWeek = new Date(currentDate);
            // Start on Monday
            startOfWeek.setDate(currentDate.getDate() - (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1));
            
            const endOfWeek = new Date(startOfWeek);
            // Extend to the following Sunday
            endOfWeek.setDate(startOfWeek.getDate() + 6);

            const timeMin = startOfWeek.toISOString(); // Convert to ISO string for API
            const timeMax = endOfWeek.toISOString(); // Convert to ISO string for API

            const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data); // Log the response data to check structure
                // Filter events for the current year
                const filteredEvents = (data.items || []).filter(event => {
                    const startDate = new Date(event.start?.dateTime || event.start?.date);
                    return startDate.getFullYear() === currentYear;
                });
                setEvents(filteredEvents); // Set filtered events
            } catch (error) {
                console.error('Error fetching calendar events:', error);
            }
        };

        fetchEvents();
    }, []);

    // Get current week dates (7 days from Monday to Sunday)
    const getCurrentWeekDates = () => {
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        // Start on Monday
        startOfWeek.setDate(currentDate.getDate() - (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1));

        const dates = [];
        for (let i = 0; i < 7; i++) { // 7 days total
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            dates.push(date);
        }
        setWeekDates(dates);
    };

    useEffect(() => {
        getCurrentWeekDates();
    }, []);

    // Organize events by day of the week
    const eventsByDay = {};
    events.forEach((event) => {
        const startDate = new Date(event.start?.dateTime || event.start?.date);
        const day = startDate.toLocaleDateString(); // Get the date string

        if (!eventsByDay[day]) {
            eventsByDay[day] = [];
        }
        eventsByDay[day].push(event);
    });

    // Get today's date for comparison
    const today = new Date().toLocaleDateString();

    return (
        <div style={{ height: '90vh', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <h1>Calendar</h1>
            <div className="calendar-container" style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '10px', justifyContent: 'center', width: '90vw' }}>
                {weekDates.map((date) => {
                    const dateString = date.toLocaleDateString();
                    const year = date.getFullYear(); // Get the year
                    const isToday = dateString === today; // Check if the date is today
                    return (
                        <div
                            key={dateString}
                            className="day"
                            style={{
                                background: isToday ? '#9238fb' : '#6e98ff', // Highlight today's date
                                borderRadius: '8px',
                                padding: '10px',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                width: `calc((80vw - 10px) / 7)`, // Adjust cell width dynamically based on container width
                                flex: '0 0 auto', // Prevent the flex item from growing or shrinking
                            }}
                        >
                            <h3 style={{ textAlign: 'center' }}>
                                {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} {year} {/* Display the year */}
                            </h3>
                            {eventsByDay[dateString] && eventsByDay[dateString].length > 0 ? ( // Check if there are events for the day
                                eventsByDay[dateString].map((event) => (
                                    <div
                                        key={event.id}
                                        style={{
                                            background: '#fff',
                                            borderRadius: '4px',
                                            padding: '10px',
                                            margin: '5px 0',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <h4>{event.summary}</h4>
                                        <p>
                                            {new Date(event.start?.dateTime || event.start?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                        <p>{event.location || 'No Location Given'}</p>
                                    </div>
                                ))
                            ) : (
                                <p style={{ textAlign: 'center', color: 'black' }}>No events for this day</p> // Message when no events are found
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
