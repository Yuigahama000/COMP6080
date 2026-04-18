import { useEffect, useState } from "react";
URL = "https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json"
const dash = () => {
    const [wons, setWons] = useState(0);
    
    const getScore = async() => {
        try {
            const response = await fetch(URL);
            const wonCount = await response.json;

            if(wonCount.error) {
                alert('Fetch error!')
            } else {
                localStorage.setItem('gameWons','wonCount');
                setWons(wonCount);
            }
        }
        catch(error) {
            console.error('Failed to fetch score:', error);
        }
    }
    useEffect
    return (
        <>
            <div className = 'flex flex-col justify-center items-center'>
                Please choose an option from the navbar.
            </div>
            <div>
                Games won: {}
            </div>
        </>
    )
}