import React from 'react';
import 
const Dashboard = () => {
    const [wons, setWons] = useState(0);

    return (
        <>
        <div className = "text">Please choose an option from the navbar.</div>
        <span>Games won: {wons}</span>
        <button className = "reset-btn"></button>
        </>
    )
}