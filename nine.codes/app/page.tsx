'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const bangkokTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Bangkok',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(now);
      setTime(bangkokTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center w-full">
          <h1 className="text-6xl font-mono">nine.codes</h1>
          <br/>
          <h1 className="text-6xl font-mono">{time}</h1>
      </div>
    </div>
  );
}
