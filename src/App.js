import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Api from './api/Api';

class App extends React.Component {
  _getApi() {
    return new Api({
      baseUrl: 'http://emphasoft-test-assignment.herokuapp.com'
    });
  }

  render() {
    const api = this._getApi();
    return (
      <div className="app">
        <Header />
        <Popup signInCallback={(user, password) => {return api.signIn(user, password)}}/>
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
