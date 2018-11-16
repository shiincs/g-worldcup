import React, { Component } from 'react';
import GameTitle from './GameTitle'
import GameDraw from './GameDraw'
import './css/Game.scss'


const data = [
  {
    name: '장원영',
    group: 'IZONE',
    img: 'http://img.enews24.cjenm.skcdn.com/News/Contents/20180901/33179876.jpg'
  },
  {
    name: '야부키 나코',
    group: 'IZONE',
    img: 'https://t1.daumcdn.net/cfile/tistory/9989E4445B3735180C'
  },
  {
    name: '미나토자키 사나',
    group: 'twice',
    img: 'http://www.city.kr/files/attach/images/238/887/202/009/09d75704c621abc12d25663dd306c795.jpg'
  },
  {
    name: '갓세정',
    group: '구구단',
    img: 'https://t1.daumcdn.net/cfile/tistory/2145B14659351ECC26'
  },
  {
    name: '청하',
    group: 'solo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Kim_Chung-ha_arriving_at_KBS_Music_Bank_on_August_03%2C_2018_%286%29.jpg/500px-Kim_Chung-ha_arriving_at_KBS_Music_Bank_on_August_03%2C_2018_%286%29.jpg'
  },
  {
    name: '소혜',
    group: '전 I.O.I',
    img: 'https://s3.namuwikiusercontent.com/s/27158f9428c5e6d88b634ea772f5873773151cb98ca09ff6789d3df57fad2a64e1a0bb025ad35e7e6f80b7ada1e3faf6c22091555e3a98fca803c82574772172993893013e36a0eda95cddb0fe55374aff23a62f622e6a22c58329ecfad556b9'
  },
  {
    name: '조이',
    group: 'Red Velvet',
    img: 'https://pbs.twimg.com/media/C1Zg1j_VIAAHhYc.jpg'
  },
  {
    name: '현아',
    group: 'solo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/HyunA_at_a_fansign_on_May_12%2C_2017_3.jpg/250px-HyunA_at_a_fansign_on_May_12%2C_2017_3.jpg'
  },
  {
    name: '소연',
    group: '(여자)아이들',
    img: 'https://pds.joins.com/news/component/JTBC/201806/07/201806071416232985.jpg'
  },
  {
    name: '제니',
    group: 'black pink',
    img: 'https://t1.daumcdn.net/cfile/tistory/995AAB3359D52E3317'
  },
  {
    name: '제니',
    group: 'black pink',
    img: 'https://s3.namuwikiusercontent.com/s/fbc701fb7760ddef9730ce8c6b9e1a50c0b8342cfcf7b86c62efbb32f4e0972ca1224d2aea4ccb9f7c64abb37cfad5a26d9eb8da5506720ef1438e63a7d576781416adc8f6250a47139c6435194ba32eb7e1a67b9aa34c6138197f5f26bfee16'
  },
  {
    name: '은하',
    group: '갓자친구',
    img: 'https://i.redd.it/7samw4ht12v01.jpg'
  },
]

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : data
    }
  }
  render() {
    const {data} = this.state
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