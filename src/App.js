import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/nav'
import Header from './components/header'
import Tags from './components/tags'
import Events from './components/events'


class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Header />
          <Tags {...this.props} />
          <Events {...this.props} />
        </div>
    );
  }
}

export default App;
