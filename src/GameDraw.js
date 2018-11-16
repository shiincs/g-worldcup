import React, { Component } from 'react';
import './css/GameDraw.scss'

class GameDraw extends Component {
  handleClick() {
    this.props.onChange()
  }
  render() {
    const {name, group, img} = this.props;
    return (
      <div className="gameDraw" onClick={() => {this.handleClick()}}>
        <img className="img" src={img}></img>
        <span className="name">{name}</span>
        <span className="group">({group})</span>
      </div>
    );
  }
}

export default GameDraw;