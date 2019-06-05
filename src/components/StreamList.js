import React from 'react';
import StreamItem from './StreamItem';
import './StreamList.css';
import { connect } from 'react-redux';

const StreamList = ({ streams }) => {
  return (
    <div className="streamList">
      {streams.map((s, i) => <StreamItem key={s.id} stream={s} />)}
    </div>
  );
}

function filterStreams(group, streams) {
  return streams.filter(s => (
    group === "all-games"
    || group === s.game
    || (group === 'null' && s.game === null)));
}

const mapToProps = state => {
  return {
    streams: filterStreams(state.streams.select, state.streams.streamsList)
  };
}

export default connect(mapToProps)(StreamList);