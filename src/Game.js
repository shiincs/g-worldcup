import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'


const base = [
  {
    id:1,
    name: '장원영',
    group: 'IZONE',
    img: 'http://img.enews24.cjenm.skcdn.com/News/Contents/20180901/33179876.jpg'
  },
  {
    id:2,
    name: '야부키 나코',
    group: 'IZONE',
    img: 'https://t1.daumcdn.net/cfile/tistory/9989E4445B3735180C'
  },
  {
    id:3,
    name: '미나토자키 사나',
    group: 'twice',
    img: 'https://pbs.twimg.com/media/C0xwG_0UUAAeRz0.jpg'
  },
  {
    id:4,
    name: '갓세정',
    group: '구구단',
    img: 'https://t1.daumcdn.net/cfile/tistory/2145B14659351ECC26'
  },
  {
    id:5,
    name: '청하',
    group: 'solo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kim_Chung-ha_arriving_at_KBS_Music_Bank_on_August_03%2C_2018_%286%29.jpg/500px-Kim_Chung-ha_arriving_at_KBS_Music_Bank_on_August_03%2C_2018_%286%29.jpg'
  },
  {
    id:6,
    name: '소혜',
    group: '전 I.O.I',
    img: 'https://s3.namuwikiusercontent.com/s/27158f9428c5e6d88b634ea772f5873773151cb98ca09ff6789d3df57fad2a64e1a0bb025ad35e7e6f80b7ada1e3faf6c22091555e3a98fca803c82574772172993893013e36a0eda95cddb0fe55374aff23a62f622e6a22c58329ecfad556b9'
  },
  {
    id:7,
    name: '조이',
    group: 'Red Velvet',
    img: 'https://pbs.twimg.com/media/C1Zg1j_VIAAHhYc.jpg'
  },
  {
    id:8,
    name: '현아',
    group: 'solo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/HyunA_at_a_fansign_on_May_12%2C_2017_3.jpg/250px-HyunA_at_a_fansign_on_May_12%2C_2017_3.jpg'
  },
  {
    id:9,
    name: '소연',
    group: '(여자)아이들',
    img: 'https://pds.joins.com/news/component/JTBC/201806/07/201806071416232985.jpg'
  },
  {
    id:10,
    name: '제니',
    group: 'black pink',
    img: 'https://t1.daumcdn.net/cfile/tistory/995AAB3359D52E3317'
  },
  {
    id:11,
    name: '제니',
    group: 'black pink',
    img: 'https://s3.namuwikiusercontent.com/s/fbc701fb7760ddef9730ce8c6b9e1a50c0b8342cfcf7b86c62efbb32f4e0972ca1224d2aea4ccb9f7c64abb37cfad5a26d9eb8da5506720ef1438e63a7d576781416adc8f6250a47139c6435194ba32eb7e1a67b9aa34c6138197f5f26bfee16'
  },
  {
    id:12,
    name: '은하',
    group: '갓자친구',
    img: 'https://i.redd.it/7samw4ht12v01.jpg'
  },
  {
    id:13,
    name: '미연',
    group: '(여자)아이들',
    img: 'https://f.ptcdn.info/219/057/000/p7ldywizinTuTvUK5AA-o.jpg'
  },
  {
    id:14,
    name: '정채연',
    group: '다이아',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/180224_%EC%98%81%ED%99%94_%EB%9D%BC%EB%9D%BC_%EC%8B%A0%EC%B4%8C_%EB%AC%B4%EB%8C%80%EC%9D%B8%EC%82%AC_%EB%8B%A4%EC%9D%B4%EC%95%84_%EC%A0%95%EC%B1%84%EC%97%B0_%EC%A7%81%EC%B0%8D_%286%29.jpg'
  },
  {
    id:15,
    name: '아이유',
    group: 'solo',
    img: 'https://i.ytimg.com/vi/frrBSyEqS6c/maxresdefault.jpg'
  },
  {
    id:16,
    name: '솔라',
    group: '마마무',
    img: 'http://img.piku.co.kr/w/uploads/18ssPD/492f4b5a701c6548e49c91db5d793013_thumb.jpg'
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
      sequence: 0,
    }
  }

  async handleChange(i) {
    await this.setState((preState)=>({
      sequence: preState.sequence + 1 // sequence 1씩 증
    })); 
    await this.setState((preState) => ({
      views: [
        base[2 * this.state.sequence],
        base[2 * this.state.sequence + 1]
      ]
    }));
    this.setState({
      round8: [{}]
    })
  }

  componentDidUpdate(){ // state가 업데이트 되고, 컴포넌트가 render 된 후에 실행되는 함수
    // 라운드 완료시
    if ((this.state.sequence * 2) === this.state.round) {
      alert('16강 완료. 8강으로 넘어갑니다.');
      this.setState((prevState) => ({
        round: prevState.round / 2,
        sequence: 0
      }))
      return;
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
                name={view.name}
                group={view.group}
                img={view.img}
                onChange={() => this.handleChange(index)}
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