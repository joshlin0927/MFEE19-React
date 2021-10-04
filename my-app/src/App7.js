import React, { useState } from 'react'
import LifecycleCC from './components/LifecycleCC'
import LifecycleFC from './components/LifecycleFC'

function App7() {
  const [isLive, setIsLive] = useState(true)

  return (
    <>
      <h2>FC</h2>
      {isLive && <LifecycleFC />}
      <br />
      <h2>CC</h2>
      {isLive && <LifecycleCC />}

      <button onClick={() => setIsLive(!isLive)}>切換</button>
    </>
  )
}

export default App7
