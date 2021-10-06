import React, { useState } from 'react'
import LifecycleCC from './components/LifecycleCC'
import LifecycleFC from './components/LifecycleFC'
import ProductFC from './components/ProductFC'
import ProductCC from './components/ProductCC'

function App7() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      <h2>FC</h2>
      {isLive && <LifecycleFC />}
      <br />
      <h2>CC</h2>
      {isLive && <LifecycleCC />}
      <br />
      <h2>FC</h2>
      {isLive && <ProductFC />}
      <br />
      <h2>CC</h2>
      {isLive && <ProductCC />}

      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App7
