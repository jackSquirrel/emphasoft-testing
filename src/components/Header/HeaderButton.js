import React from 'react';

export default function HeaderButton(props) {
    return (
    <button onClick={props.callback} className="header__button">{props.name}</button>
    );
}