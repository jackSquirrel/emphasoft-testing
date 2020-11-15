import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Api from './api/Api';
import Content from './components/Content/Content';

class App extends React.Component {
  _getApi() {
    return new Api({
      baseUrl: 'http://emphasoft-test-assignment.herokuapp.com'
    });
  }

  _checkLogging() {
    if (localStorage.getItem('token') != null) {
      this.props.toLogIn();
    }
  }

  render() {
    const api = this._getApi();
    this._checkLogging();
    return (
      <div className="app">
        <Header />
        <Content getUsers={() => api.getUsers()} />
        { this.props.isPopupOpen ? <Popup 
          signInCallback={(user, password) => api.signIn(user, password)}
          /> : null }
      </div>
    );
  }
}

export default connect(
  state => ({
    isPopupOpen: (state.isPopupOpen.popupSignIn || state.isPopupOpen.popupLoggedIn || state.isPopupOpen.popupError),
  }),
  dispatch => ({
    toLogIn: () => {
      dispatch({ type: 'ENTERED' })
    }
  })
)(App);
