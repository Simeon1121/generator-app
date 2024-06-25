import React, { useState, useEffect } from 'react';
import '../Styles/Hero.css';
import divider from '../assets/pattern-divider-desktop.svg';
import diceIcon from '../assets/icon-dice.svg';

const Hero = () => {
  const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState(null);
  
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
    useEffect(() => {
        fetchAdvice();
      }, []);
  return (
    <>
      <div className='generator'>
        <div className='box'>
          {adviceId && <p className='text-success text-advice'> ADVICE #{adviceId}</p>}
          <p className='text-adviser'>{advice}</p>
          <img className='line-divider' src={divider} alt="line-divider" />
          <button className='dice-icon' onClick={fetchAdvice}>
            <img src={diceIcon} alt='dice' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;