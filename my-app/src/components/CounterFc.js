import React, { useState } from 'react'

// 每個新的JS都一定要引用React，這裡的是部分引用，只引用useState
// Fc = functional component
function CounterFC() {
    const [total, setTotal] = useState(0)
  
    return (
      <>
        <h1
          onClick={() => {
            setTotal(total + 1)
          }}
        >
          {total}
        </h1>
      </>
    )
  }
  
export default CounterFC