import React from 'react';

// Отрисовка кнопки в header'e
export default function HeaderButton(props) {
    return (
        <button onClick={props.callback} className="header__button">{props.name}</button>
    );
}