// officers.jsx
import React from 'react';
import officerData from '../components/OfficerData';

const Officers = () => {
    return (
        <div>
            <h1>Officers</h1>
            <div className='row'>
                {officerData.map((officer, index) => (
                    <div className='column' key={index}>
                        <div className='card'>
                            <img src={officer.image[0]} alt={`${officer.name}`} />
                            <h1>{officer.name}</h1>
                            <h4>{officer.position}</h4>
                            <p>Hometown: {officer.hometown}, {officer.homeState}</p>
                            <p>Fun Fact: {officer.funFact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Officers;
