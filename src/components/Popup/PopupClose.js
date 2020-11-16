import React from 'react';
import { connect } from 'react-redux';

class PopupClose extends React.Component {
    _closePopup() {
        this.props.onCloseClick();
    }

    render() {
        return (
            <img 
                src="images/close.svg" 
                alt="X" 
                className="popup__close"
                onClick={this._closePopup.bind(this)} 
            />
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onCloseClick: () => {
            dispatch({ type: 'CLOSE_POPUP' })
        }
    })
)(PopupClose);