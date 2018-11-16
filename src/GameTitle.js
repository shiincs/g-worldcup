import React from 'react';
import './css/GameTitle.scss'

const GameTitle = (prop) => {
  return (
    <div className="gameTitle">
      <h2>Girl Group WorldCup Round of {prop.round} : {prop.sequence}/{prop.round / 2}</h2>
    </div>
  );
};

export default GameTitle;