import React, { useState } from 'react';

import './box.css';

export default function Box(props) {

    const [color, setColor] = useState('white')

    let className = "box";
    if (color === "white") {
        className += " " + "white";
    } else if (color === "black") {
        className += " " + "black";
    }

    function changeColor() {
        if (color === "white") {
            setColor("black");
            props.onClickInc();
        } else {
            setColor("white");
            props.onClickDec();
        }

    }

    return (<div className={className} onClick={() => changeColor()}>
    </div>);
}