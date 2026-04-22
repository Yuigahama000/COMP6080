import { useState, useEffect } from "react";
const strs = [
    'the fat cats',
    'larger frogs',
    'banana cakes',
    'unsw vs usyd',
    'french toast',
    'hawaii pizza',
    'barack obama',
];
const Blanko = () => {
    const [hiddenIndexes, setHiddenIndexes] = useState([]);
    const [answer, setAnswer] = useState('');
    const [userInput, setInput] = useState([]);
    const [isWon, setIsWon] = useState("false");
    const initialise = () => {
        const randomIndex = Math.floor(Math.random() * strs.length);
        const selectedStr = strs[randomIndex];
        setAnswer(selectedStr);

        const nonSpaceIndexes = [];
        for(let i = 0; i < selectedStr.length; i++) {
            if (selectedStr[i] != ' ') {
                nonSpaceIndexes.push(i);
            }
        }
        const shuffled = [...nonSpaceIndexes].sort(() => 0.5 - Math.random());
        const
        
    }

}