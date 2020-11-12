import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Popup />
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    
  })
)(App);
