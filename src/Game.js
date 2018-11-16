import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'


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
      end: false,
      round: 16,
      sequence: 0
    }
  }

  count = 0
  async handleChange(id, db) {
    db = base
    if(this.state.round8.length === 7) {
      const round8 = this.state.round8.slice()
      round8.push(db[id-1])
      this.count = 0;
      db = round8;
      await this.setState({
        round8: round8,
        sequence: 0,
        round: 8,
        views: [
          db[2 * this.count],
          db[2 * this.count + 1]
        ]
      })
      console.log(this.state)
    } else {
      this.count++
      const round8 = this.state.round8.slice()
      round8.push(db[id-1])

      await this.setState((prevState)=>({
        sequence: prevState.sequence + 1, // sequence 1씩 증
        views: [
          db[2 * this.count],
          db[2 * this.count + 1]
        ],
        round8: round8
      }));
      console.log(this.state.round8)
    }
  }

  // componentDidUpdate(){ // state가 업데이트 되고, 컴포넌트가 render 된 후에 실행되는 함수
  //   // 라운드 완료시
  //   if ((this.state.sequence * 2) === this.state.round) {
  //     this.setState((prevState) => ({
  //       round: prevState.round / 2,
  //       sequence: 0,
  //       db: this.state.round8,
  //       views: [
  //         this.state.round8[0],
  //         this.state.round8[1]
  //       ]
  //     }))
  //     alert('16강 완료. 8강으로 넘어갑니다.');
  //   }
  // }

  render() {
    const {views, end, round, sequence, db} = this.state;
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
                db={db}
                onChange={(id, db) => this.handleChange(view.id, db)}
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