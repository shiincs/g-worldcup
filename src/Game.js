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

// const randomArr = new Array(16)

// function random(arr, data) {
//   for(let i=0; i < arr.length; i++) {
//     arr.push(data[Math.floor(Math.random() * 2)])
//   }
// }

// random(randomArr, data)
// console.log(randomArr)

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data1: data[0],
      data2: data[1],
      end: false,
      title: 16,
      sequence: 1,
    }
  }

  handleChange() {
    this.setState({
      data1: data[2],
      data2: data[3]
    })
  }

  render() {
    const {data1, data2, end, title, sequence} = this.state
    
    return (
      <div className="game">
        <GameTitle />
        <GameDraw name={data1.name} group={data1.group} img={data1.img} onChange={() => this.handleChange()} />
        <div className="vs">VS</div>
        <GameDraw name={data2.name} group={data2.group} img={data2.img} />
      </div>
    );
  }
}

export default Game; 