import React from 'react';
import './css/GameTitle.scss'

const GameTitle = (props) => {
  const {stage, nowSequence, maxSequence} = props
  return (
    <div className="gameTitle">
      <h2>Girl Group WorldCup Round of {stage} : {nowSequence}/{maxSequence}</h2>
    </div>
  );
};

export default GameTitle;