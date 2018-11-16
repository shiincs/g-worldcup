import React, { Component } from 'react';
import './css/GameDraw.scss'

class GameDraw extends Component {
  handleClick(id) {
    // console.log(id)
    this.props.onChange(id)
  }

  render() {
    const {id, name, group, img} = this.props;
    const path = './images/'
    return (
      <div className="gameDraw" onClick={() => {this.handleClick(id)}}>
        <img className="img" src={path+img}></img>
        <span className="name">{name}</span>
        <span className="group">({group})</span>
      </div>
    );
  }
}

export default GameDraw;