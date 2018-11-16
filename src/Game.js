import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'


const data = [{
  name: '장원영',
  group: '아이즈원',
  img: 'http://img.enews24.cjenm.skcdn.com/News/Contents/20180901/33179876.jpg'
}, {
  name: '야부키 나코',
  group: '아이즈원',
  img: 'https://t1.daumcdn.net/cfile/tistory/9989E4445B3735180C'
}]

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : data,
      end: false,
      title: 16,
      sequence: 1,

    }
  }
  render() {
    const {data, end, title, sequence} = this.state
    const randomArr = new Array(title)
    for(let i=0; i < randomArr.length; i++) {
      
    }
    
    return (
      <div className="game">
        <GameTitle />
        <GameDraw name={data[0].name} group={data[0].group} img={data[0].img}/>
        <div className="vs">VS</div>
        <GameDraw name={data[1].name} group={data[1].group} img={data[1].img} />
      </div>
    );
  }
}

export default Game; 