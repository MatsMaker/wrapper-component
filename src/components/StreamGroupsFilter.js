import React from 'react';
import { connect } from 'react-redux';
import { changeSelect } from '../redux/actions';

const StreamGroupsFilter = ({ streamGroups, steamsCount, select, changeSelect }) => {
  const groupsOption = [];
  for (let group in streamGroups) {
    groupsOption.push(<option key={group} value={group}>{group} - {streamGroups[group]}</option>);
  }

  return (
    <select value={select} onChange={changeSelect}>
      <option value="all-games">all - {steamsCount}</option>
      {groupsOption}
    </select>
  );
}

function splitByGroups(steamList) {
  const streamGroups = {};
  steamList.forEach(s => {
    if (!streamGroups.hasOwnProperty(s.game)) {
      streamGroups[String(s.game)] = 1;
    } else {
      streamGroups[String(s.game)] += 1;
    }
  });
  return streamGroups;
}

const mapToProps = state => {
  return {
    steamsCount: state.streams.streamsList.length,
    streamGroups: splitByGroups(state.streams.streamsList),
    select: state.streams.select,
  };
}

export default connect(mapToProps, { changeSelect })(StreamGroupsFilter);