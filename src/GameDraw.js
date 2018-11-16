import React, { Component } from 'react';
import './css/GameDraw.scss'

class GameDraw extends Component {
  handleClick(id, db) {
    // console.log(id)
    this.props.onChange(id, db)
  }

  render() {
    const {id, name, group, img, db} = this.props;
    const path = './images/'
    return (
      <div className="gameDraw" onClick={() => {this.handleClick(id, db)}}>
        <img className="img" src={path+img}></img>
        <span className="name">{name}</span>
        <span className="group">({group})</span>
      </div>
    );
  }
}

export default GameDraw;