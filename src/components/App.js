import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getStreams } from '../redux/actions'
import StreamList from './StreamList';
import StreamGroupsFilter from './StreamGroupsFilter';
import Wrapper from './Wrapper';

class App extends Component {

  componentDidMount() {
    this.props.getStreams();
  }

  render() {

    return (
      <Wrapper role={this.props.userRole}>
        <StreamGroupsFilter />
        <StreamList />
      </Wrapper>
    )
  }
}

function mapToProps(state) {
  return {
    userRole: state.streams.userRole,
  }
}

export default connect(
  mapToProps,
  { getStreams }
)(App);