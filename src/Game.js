import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'
import { throws } from 'assert';


const base = [
  {
    id:1,
    name: '장원영',
    group: 'IZONE',
    img: 'wonyoung.jpg'
  },
  {
    id:2,
    name: '야부키 나코',
    group: 'IZONE',
    img: 'yabuki-nako.jpg'
  },
  {
    id:3,
    name: '미나토자키 사나',
    group: 'twice',
    img: 'sana.jpg'
  },
  {
    id:4,
    name: '갓세정',
    group: '구구단',
    img: 'sejung.jpg'
  },
  {
    id:5,
    name: '청하',
    group: 'solo',
    img: 'chungha.jpg'
  },
  {
    id:6,
    name: '소혜',
    group: '전 I.O.I',
    img: 'sohye.jpeg'
  },
  {
    id:7,
    name: '조이',
    group: 'Red Velvet',
    img: 'joy.png'
  },
  {
    id:8,
    name: '현아',
    group: 'solo',
    img: 'hitomi.jpeg'
  },
  {
    id:9,
    name: '소연',
    group: '(여자)아이들',
    img: 'soyun.jpeg'
  },
  {
    id:10,
    name: '제니',
    group: 'black pink',
    img: 'jeny.jpeg'
  },
  {
    id:11,
    name: '나연',
    group: 'twice',
    img: 'nayun.jpg'
  },
  {
    id:12,
    name: '은하',
    group: '갓자친구',
    img: 'eunha.jpg'
  },
  {
    id:13,
    name: '손나은',
    group: 'a-pink',
    img: 'son.jpg'
  },
  {
    id:14,
    name: '정채연',
    group: '다이아',
    img: 'jcy.jpg'
  },
  {
    id:15,
    name: '아이유',
    group: 'solo',
    img: 'iu.jpg'
  },
  {
    id:16,
    name: '제시',
    group: '제시',
    img: 'jesi.jpg'
  }
]

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
      views:[
        base[0],
        base[1]
      ],
      round8:[],
      round4:[],
      round2: [],
      end: false,
      round: 16,
      sequence: 0,
    }
  }
  count = 0;
  async handleChange(id) {
    if (this.state.round2.length === 2) {
     alert(this.state.round2.find(item => item.id === id).name)

    }  
    if (this.state.round2.length === 1) {
      // 결승 초기화면
      this.count = 0;
      const round2 = this.state.round2.slice()
      round2.push(this.state.round4.find(item => item.id === id))
      await this.setState({
        round2: round2
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [
          this.state.round2[0],
          this.state.round2[1],
        ],
        round: 2
      }));

    }  
    if (this.state.round4.length > 3 && this.state.round2.length < 1) {
      // 4강 로직
      this.count++;
      const round2 = this.state.round2.slice()
      round2.push(this.state.round4.find(item => {
        return item.id === id;
      }))
      this.setState((prevState) => ({
        sequence: prevState.sequence + 1,
        views: [
          this.state.round4[2 * this.count],
          this.state.round4[2 * this.count + 1]
        ],
        round2: round2
      }));
    }  

    if (this.state.round4.length === 3) {
      // 4강 초기화면
      this.count = 0;
      const round4 = this.state.round4.slice()
      round4.push(this.state.round8.find(item => item.id === id))
      await this.setState({
        round4: round4
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [
          this.state.round4[0],
          this.state.round4[1],
        ],
        round: 4
      }));

    }  

    if (this.state.round8.length > 7 && this.state.round4.length < 3){
      // 8강 로직
      this.count++;
      const round4 = this.state.round4.slice()
      round4.push(this.state.round8.find(item => {
        return item.id === id;
      }))
      this.setState((prevState) => ({
        sequence: prevState.sequence + 1,
        views: [
          this.state.round8[2 * this.count],
          this.state.round8[2 * this.count + 1]
        ],
        round4: round4
      }));
    }  

    if (this.state.round8.length === 7){
      // 8강 초기화면
      this.count= 0;
      const round8 = this.state.round8.slice()
      round8.push(base.find(item => item.id === id));
      await this.setState({
        round8: round8
      });
      this.setState((prevState) => ({
        sequence: 0,
        views: [
          this.state.round8[0],
          this.state.round8[1],
        ],
        round: 8
      }));

    }  
    if (this.state.round8.length < 7){
      // 16강 로직
      this.count++;
      const round8 = this.state.round8.slice()
      round8.push(base[id - 1])

      this.setState((prevState) => ({
        sequence: prevState.sequence + 1, // sequence 1씩 증
        views: [
          base[2 * this.count],
          base[2 * this.count + 1]
        ],
        round8: round8
      })); 
    }
    
  }

  render() {
    const {views, end, round, sequence} = this.state;
    console.log(this.state);
    return (
      <div className="game">
        <GameTitle round={round} sequence={sequence + 1}/>
        {
          views.map((view, index) => {
            return (
              <GameDraw key={index}
                id={view.id}
                name={view.name}
                group={view.group}
                img={view.img}
                onChange={(id) => this.handleChange(id)}
              />
            )
          })
        }
        <div className="vs">VS</div>
      </div>
    );
  }
}

export default Game; 