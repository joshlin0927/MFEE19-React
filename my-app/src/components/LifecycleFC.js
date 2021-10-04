import React, { useEffect, useState, useRef } from 'react'

const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}
function LifecycleFC() {
  const [total, seTotal] = useState(initialState())
  const [didMount, setDidMount] = useState(false)
  const didMountRef = useRef(false)

  useEffect(() => {
    console.log('like_componentDidMount')

    // 設定目前進入didMount階段
    setDidMount(true)
  }, [])

  useEffect(() => {
    console.log('like_componentDidUpdate+componentDidMount', total)
  }, [total])

  // 指模擬componentDidUpdate
  // 利用didMount狀態值來完整模擬
  // eslint會友警告，請無視
  useEffect(() => {
    if (didMount) {
      console.log('like_componentDidUpdate', total)
    }
  }, [total])

  useEffect(() => {
    if (didMountRef.current) {
      console.log('like_componentDidUpdate', total)
    } else {
      didMountRef.current = true
    }
  }, [])

  useEffect(() => {
    return () => {
      console.log('like_componentWillUnmount', total)
    }
  }, [])
  return (
    <>
      {console.log('render')}
      <h1
        onClick={() => {
          seTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default LifecycleFC
