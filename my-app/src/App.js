import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  // 解構賦值， [Getter(得到狀態), setter(設定狀態)] = useState(初始值)
  // 初始值的括號裡面不寫東西的話，得到的會是undefined
  // 這會導致+1後變成NaN

  return (
    <>
    <h1>{total}</h1>
    <button onClick={() => {setTotal(total + 1)}}>+</button>
    <button onClick={() => {setTotal(total - 1)}}>-</button>
    </>
  )
}

export default App
