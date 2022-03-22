import React, { useState } from 'react';

import Box from './box'
import './app.css';


function App() {

    const [numSelected, setNumSelected] = useState(0);
    const increment = () => setNumSelected(numSelected + 1);
    const decrement = () => setNumSelected(numSelected - 1);

    return (
        <div>
            <h1> Count: {numSelected}</h1>
            <div className="container">
                <Box onClickInc={increment} onClickDec={decrement}/>
                <Box onClickInc={increment} onClickDec={decrement}/>
                <Box onClickInc={increment} onClickDec={decrement}/>
                <Box onClickInc={increment} onClickDec={decrement}/>
            </div>
        </div>
    );
}

export default App;