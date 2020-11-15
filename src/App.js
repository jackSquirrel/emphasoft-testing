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

  render() {
    const api = this._getApi();
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
    isPopupOpen: (state.isPopupOpen.popupSignIn || state.isPopupOpen.popupLoggedIn)
  }),
  dispatch => ({
    
  })
)(App);
