import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import StreamData from './StreamData';
import SteamList from './StreamList';
import Wrapper from './Wrapper';

class App extends Component {

  state = {
    select: 'all-games',
    steamList: [],
    userRole: 'admin',
    streamGroups: {},
  }

  componentDidMount() {
    axios.get(`https://predictoria.com/api/stream/`)
      .then(res => {
        this.setState({
          steamList: StreamData,
          streamGroups: this.splitByGroups(StreamData),
        }); // You mast give CORS access
      })
      .catch(e => {
        this.setState({ // Of course it is only for some show =)
          steamList: StreamData,
          streamGroups: this.splitByGroups(StreamData),
        });
      });
  }

  splitByGroups(steamList) {
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

  changeSelect(event) {
    this.setState({ select: event.target.value });
  }

  render() {

    const groupsOption = [];
    const stateGroups = this.state.streamGroups;
    for (let group in stateGroups) {
      groupsOption.push(<option key={group} value={group}>{group} - {stateGroups[group]}</option>);
    }

    return (
      <Wrapper
        role={this.state.userRole}>

        <select value={this.state.select} onChange={this.changeSelect.bind(this)}>
          <option value="all-games">all - {this.state.steamList.length}</option>
          {groupsOption}
        </select>

        <SteamList
          list={this.state.steamList}
          select={this.state.select}
        />
      </Wrapper>
    )
  }
}

export default App;