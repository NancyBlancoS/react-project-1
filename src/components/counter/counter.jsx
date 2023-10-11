import React from 'react'
import {useState} from 'react'

import "./counter.css"

export default function Counter() {

    const [contador, setContador] = useState(0)

    const increment = () => {
        setContador(count => count + 1)
    }

    const decrement = () => {
        if (contador > 0) {
        setContador(count => count - 1)
        }
    }

    return (
        <div className='counter-box'>
            <h1>Counter</h1>
            <p>{contador}</p>
            <button className='increment' onClick={increment}>Increment</button>
            <button className='decrement' onClick={decrement}>Decrement</button>
        </div>
        )
}