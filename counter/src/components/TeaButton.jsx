import React from 'react'
import './TeaButton.css'
import { useState, useEffect } from 'react'
import teaCup from '/src/assets/teaCup.jpg'


function TeaButton( { className }) {
    const [count, setCount] = useState(()=> {
        const storedCount = localStorage.getItem('teaCount');
        return storedCount ? parseInt(storedCount, 0) :0;
    });
  
    useEffect(() => {
        localStorage.setItem('teaCount', count.toString());
    }, [count]);

    const handleClick = (e) => {
      e.preventDefault();
      setCount((prevCount) => prevCount +1);
    };
  
    return (
      <div className="tea">
        <img src={teaCup} alt="tasse-de-thé-kawaii" onClick={handleClick}/>
        <button className="tea" onClick={handleClick}>
          Click Me : {count}
        </button>
    
      </div>
    );
  }
  

export default TeaButton