import React, { Component } from 'react';
import StreamItem from './StreamItem';
import './StreamList.css';

export default class StreamList extends Component {

  render() {
    const streamList = [];
    const select = this.props.select;
    this.props.list.forEach((s, i) => {
      if (
        select === "all-games"
        || select === s.game
        || (select === 'null' && s.game === null)) { // I think we can do it mo better / need more time
        streamList.push(
          <StreamItem key={s.id} stream={s} />
        );
      }
    });
    return (
      <div className="streamList">
        {streamList}
      </div>
    );
  }
}