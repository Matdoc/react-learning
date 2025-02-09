import React, { useState, useEffect } from 'react';
import './Stopwatch.css';
const Stopwatch = () => {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isRunning, setIsRunning] = useState(false);

     useEffect(() => {
      let interval;
      if(isRunning){
        interval = setInterval(()=>{
          setTime((prevTime) => prevTime + 10);
        } , 10)}
        else{
          clearInterval(interval);
        }

        return () => {
          clearInterval(interval);
        };
      
     }, [isRunning]);

    const formatTime = (time) => {
      const milliseconds = Math.floor((time % 1000) / 10);
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor(time / 1000 / 60 / 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Stopwatch</h1>
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
        </div>
    );
};

export default Stopwatch;
