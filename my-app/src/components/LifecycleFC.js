import React, { useEffect, useState, useRef } from 'react'

const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}

function LifecycleFC() {
  const [total, seTotal] = useState(initialState())
  const [didMount, setDidMount] = useState(false)
  const didMountRef = useRef(false)
  // useRef 能將虛擬DOM轉為真實DOM，可以記錄東西

  // 如果程式碼有副作用的話，才會用到useEffect，EX: 時鐘、setTimeout、
  // 做動畫、第三方API連結

  // 因為有考量到生命週期，所以可以用來模仿生命週期方法

  // 這裡等於didMount
  // 因為沒有相依的東西(陣列是空的)，所以只能執行一次
  useEffect(() => {
    console.log('like_componentDidMount')

    // 設定目前進入didMount階段
    setDidMount(true)
  }, [])

  // 只執行第一次(讀取到時)
  // 相依性：當陣列裡面的變數(props or 狀態)改變時，執行useEffect裡的程式碼

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
      {console.log('render')}{' '}
      <h1
        onClick={() => {
          seTotal(total + 1)
        }}
      >
        {' '}
        {total}{' '}
      </h1>{' '}
    </>
  )
}

export default LifecycleFC
