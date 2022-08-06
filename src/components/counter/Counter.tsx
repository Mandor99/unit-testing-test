import React, { useEffect, useState } from 'react'

type Props = {
    desc: string,
    initCount: number
}

const Counter = ({desc, initCount}: Props) => {
    const [count, setCount] = useState<number>(initCount)
    const [mount, setMount] = useState<number>(1)
    const [big, setBig] = useState(initCount>=15)
    useEffect(() => {
      console.log(big)
      let active: NodeJS.Timeout
      if(count >=15) {active = setTimeout(() => setBig(true), 300)}
      // else {setBig(false)}
      return function cleanup() {
        clearTimeout(active)
      }
    },[count])
  return (
    <div>
        <p>DESC:{desc} - DC ={initCount}</p>
        <input type='number' value={mount} onChange={(e) => setMount(Number(e.target.value || 1))}/>
        <button aria-label='increment' onClick={() => setCount(prev => prev+mount)}>+</button>
        <span> Current Count: {count}</span>
        <button aria-label='decrement' onClick={() => setCount(prev => prev-mount)}>-</button>
        <button aria-label='async increment' onClick={() => setTimeout(() => setCount(prev => prev+ mount), 900)}>+</button>
        {big ? null : <p>counter is still smaller</p>}

    </div>
  )
}

export default Counter