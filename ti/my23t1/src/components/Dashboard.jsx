import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [wons, setWons] = useState(0);
    
    // 1. 定义 initialise 函数
    // 注意：这里不需要 setIsLoading，除非你想做加载动画，题目没要求可以简化
    const initialise = async () => {
        const localScore = localStorage.getItem('gamesWon'); // 建议统一 key 名称，比如 'gamesWon'

        if (localScore) {
            // 如果本地有，直接用本地的 (转为数字)
            setWons(parseInt(localScore, 10));
        } else {
            // 如果本地没有，去 fetch API
            try {
                const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json');
                const data = await response.json();
                const apiScore = data.score;
                
                setWons(apiScore);
                // 存到本地，下次就不用 fetch 了
                localStorage.setItem('gamesWon', apiScore.toString());
            } catch (error) {
                console.error("Failed to fetch score:", error);
                setWons(0);
            }
        }
    };

    useEffect(() => {
        initialise();
    }, []); // 空依赖数组，只执行一次


    const handleReset = () => {

        const forceFetch = async () => {
             try {
                const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json');
                const data = await response.json();
                const apiScore = data.score;
                setWons(apiScore);
                localStorage.setItem('gamesWon', apiScore.toString());
            } catch (error) {
                console.error("Reset failed:", error);
            }
        };
        
        forceFetch();
    };

    return (
        <div className="dashboard-container">
            {/* 第一行：红色，2em */}
            <div className="instruction-text">
                Please choose an option from the navbar.
            </div>

            {/* 第二行：分数和按钮 */}
            <div className="score-row">
                <span>Games won: {wons}</span>
                <button onClick={handleReset} className="reset-link">
                    (reset)
                </button>
            </div>
        </div>
    );
};

export default Dashboard;