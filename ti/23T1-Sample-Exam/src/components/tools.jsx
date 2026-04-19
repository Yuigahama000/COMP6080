import { countWon } from "./Blanko"

export const incrementWons = () => {
    const currentWons = Number(localStorage.getItem('won'));
    localStorage.setItem('won', String(currentWons + 1));
}

