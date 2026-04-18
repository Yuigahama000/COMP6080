import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [won, setWon] = useState(0);

  // 从 API 获取初始分数
  const getScore = async () => {
    try {
      const response = await fetch(
        'https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json'
      );
      const data = await response.json();

      if (data.error) {
        alert('fetching error');
      } else {
        localStorage.setItem('won', data.score);
        setWon(data.score);
      }
    } catch (error) {
      console.error('Failed to fetch score:', error);
    }
  };

  // 组件挂载时检查 localStorage
  useEffect(() => {
    const storedWon = localStorage.getItem('won');
    
    if (!storedWon) {
      // 首次加载,从 API 获取初始值
      getScore();
    } else {
      // 已有存储的值,直接使用
      setWon(parseInt(storedWon, 10));
    }
  }, []); // 空依赖数组,只在挂载时执行一次

  // 重置按钮处理函数
  const handleReset = () => {
    // 重置后重新从 API 获取初始值
    getScore();
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center h-full'>
        {/* 第一行文本 */}
        <div className='text-red-500 text-[2em] break-words text-center mb-4'>
          Please choose an option from the navbar.
        </div>

        {/* 第二行内容 */}
        <div className='flex gap-2 items-center'>
          <div>
            Games won: {won}
          </div>

          <button
            className='btn'
            onClick={handleReset}
          >
            (reset)
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
