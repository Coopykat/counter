import './CoffeeButton.css'
import { useState, useEffect} from 'react';
import coffee  from '/src/assets/coffeeCup.jpg'

function CoffeeButton({ className }) {
    const [count, setCount] = useState(() => {
      const storedCount = localStorage.getItem('coffeeCount');
      return storedCount ? parseInt(storedCount, 0) : 0;
    });
  
    useEffect(() => {
      localStorage.setItem('coffeeCount', count.toString());
    }, [count]);
  
    const handleClick = (e) => {
      e.preventDefault();
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <div>
        <img src={coffee} alt="tasse-de-cafe-kawaii" />
        <button className={className} onClick={handleClick}>
          Click Me : {count}
        </button>

        
      </div>
    );
  }

export default CoffeeButton;