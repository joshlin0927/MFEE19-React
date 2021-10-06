import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'

function App8() {
  const [data, setData] = useState(123)
  const buttonRef = useRef()

  useEffect(() => {
    // jQuery 或是其他外部API都要寫在useEffect裡面，後面的陣列要加上去，這樣才能紀錄狀態變動
    // jQuery 狀態整合，如果不做移除的話，接下來更改的狀態都會接連出現
    // 移除原本的事件
    $(buttonRef.current).off('click')

    // 加入新的事件
    $(buttonRef.current).on('click', () => alert('data is ' + data))
  }, [data])

  useEffect(() => {
    $('#123').on('click', () => {
      // console.log('hi')
      $('#123').html('456')
    })
  }, [])

  return (
    <>
      <button ref={buttonRef}>click me</button>
      <br />
      <button
        onClick={() => {
          setData(999)
        }}
      >
        狀態變為999
      </button>
      <br />
      <div id="123">123</div>
    </>
  )
}

export default App8
