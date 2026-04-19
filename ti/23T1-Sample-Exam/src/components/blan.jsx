import { useEffect, useState } from "react";
import { incrementWons } from "./tools"
export const strs = [
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
    const [ans, setAns] = useState("");
    const [input, setInput] = useState([]);
    const initilise = () => {
        const randomIndex = Math.floor(Math.random() * strs.length);
        const randomStr = strs[randomIndex];
        const avaliableIndexes = randomStr.split(" ").map((char,i) => char !== " " ? i : null).filter((i) => i !== null);
        const shuffled = [...avaliableIndexes].sort(()=> Math.random() - 1);
        const selectedIndexes = shuffled.slice(0,3)
        const initialInputs = {};
        selectedIndexes.forEach((index) =>  {
            initialInputs[index] = " ";
        })
        setInput(initialInputs);
        setAns(randomStr);
        setHiddenIndexes(selectedIndexes);
    }
    
    const handleInputChange = (e, index) => {
        const value = e.target.value;
        const newInputs = {...input, [index] : value}
        setInput(newInputs);
        const filledAll = hiddenIndexes.every((index) => newInputs[index] !== "");
        if(filledAll) {
            incrementWons();
            alert("Congrats!");
            startNewGame();
        }
    }
    startNewGame = () => {
        initilise();
    }
    useEffect(() => {
        initilise();
    }, [])
    return (
        <>
            <div className = "flex flex-col items-center justify-center h-full"></div>
        </>
    )
}
