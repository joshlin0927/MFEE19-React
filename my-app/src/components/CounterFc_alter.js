import React, { useState } from 'react'

// 每個新的JS都一定要引用React，這裡的是部分引用，只引用useState
// Fc = functional component
function CounterFC_alter() {
  const [total, setTotal] = useState(0)
  const [abc, setAbc] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1 //同步
          setTotal(newTotal) // 異步，用途一：react改變網頁上的dom元素
          setAbc(newTotal)
          // 得到設定狀態，後的結果異步執行
          console.log(total) // 同步，用途二：主控台輸出最後的狀態值
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default CounterFC_alter
