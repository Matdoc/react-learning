import './StopWatch.css'

import React , {useState,useRef} from  'react'

function StopWatch() {
    // here we are going to impleement the stopwatch 
    // Functionality 
         //-> Start and stop with the same button
         // -> Reset button
         // -> we can pause and resume using start and stop

      //  we will have a state to have a initial time 
      // we will set the state to check the switch
      //  we need to set the reference for the start value
      //  we will set the reference for the intervalId
   
    const [time,setTime] = useState(0);
    const [isChange, setIsChange] = useState(false);
    const refIntervalId = useRef(null);
    const reStartTime = useRef(0);



  return (
    <div className='card'>
        <div> 
           
           <h1>Display time : 00:00:00 </h1> 
            
        </div>
        <div className='buttonContainer'> 
            <button className='btn'>Start</button>
            <button className='btn'>Stop</button>
            <button className='btn'>reset</button>
        </div>
    </div>
  )
}

export default StopWatch

