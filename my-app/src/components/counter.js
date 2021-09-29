import React, { useState } from 'react'
import MyButton2 from './MyButton2'

function Counter() {
  const [total, setTotal] = useState(0)

  const changeTotal = (value) => {
    const newTotal = total + value < 1 ? 1 : total + value
    setTotal(newTotal)
  }

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <MyButton2 text="+1" value={1} changeTotal={changeTotal} />
        <button type="button" class="btn">
          {total}
        </button>
        <MyButton2 text="-1" value={-1} changeTotal={changeTotal} />
      </div>
    </>
  )
}

export default Counter
