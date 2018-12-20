import React, { useState } from 'react';

const ScoreCounter = () => {
  const [score, setScore] = useState(0)
  
  const changeScore = (toChange) => {
    setScore(score + toChange)
  } 

  return (
    <div style={{float: "left"}}>
      <span onClick={() => changeScore(1)} role='img' id='score' style={{ fontWeight: '900' }}>{'⬆️'}</span>
      <span id='score'>{score}</span>
      <span onClick={() => changeScore(-1)} role='img' id='score' style={{ fontWeight: '900' }}>{'⬇️'}</span>
    </div>
  )
};

export default ScoreCounter;
