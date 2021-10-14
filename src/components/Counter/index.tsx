import React, { useState } from 'react'
import './style.css'

export const Counter = () => {
    const [inputValue, setInputValue] = useState(0)
    return (
        <div>
            <h3>{inputValue}</h3>
            <div>
                <button onClick={() => setInputValue(inputValue+ 1)}>+</button>
                <button onClick={() => setInputValue(inputValue - 1)}>-</button>
            </div>
            <br />
            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
                <button onClick={() => setInputValue(inputValue)}>Update Value</button>
            </div>
        </div>
    )
}