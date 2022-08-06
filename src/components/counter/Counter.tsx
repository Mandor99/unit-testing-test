import React, { useState } from 'react'

type Props = {
    desc: string,
    initCount: number
}

const Counter = ({desc, initCount}: Props) => {
    const [count, setCount] = useState<number>(initCount)
    const [mount, setMount] = useState<number>(1)
  return (
    <div>
        <p>DESC:{desc} - DC ={initCount}</p>
        <input type='number' value={mount} onChange={(e) => setMount(Number(e.target.value || 1))}/>
        <button aria-label='increment' onClick={() => setCount(prev => prev+mount)}>+</button>
        <span> Current Count: {count}</span>
        <button aria-label='decrement' onClick={() => setCount(prev => prev-mount)}>-</button>
    </div>
  )
}

export default Counter