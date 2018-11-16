import React, { Component } from 'react';
import './css/GameDraw.scss'

class GameDraw extends Component {
  handleClick(e) {
    console.log(e.target)
    this.props.onChange()
  }

  render() {
    const {name, group, img} = this.props;
    return (
      <div className="gameDraw" onClick={(e) => {this.handleClick(e)}}>
        <img className="img" src={img}></img>
        <span className="name">{name}</span>
        <span className="group">({group})</span>
      </div>
    );
  }
}

export default GameDraw;