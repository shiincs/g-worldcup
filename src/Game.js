import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'


const data = [{
  name: '장원영',
  group: '아이즈원',
  img: ''
}]
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '장원영'
      group: '아이즈원'
      
    }
  }
  render() {
    return (
      <div>
        <GameTitle />
        <GameDraw />
      </div>
    );
  }
}

export default Game; 