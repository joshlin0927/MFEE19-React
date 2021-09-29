import React, { useState, useEffect } from 'react'

function ChildB(props) {
  const [ChildBData, setChildBData] = useState('ChildB Data')

  // 在出現時就直接更動，而非透過按鈕觸發
  useEffect(() => {
    props.setData(ChildBData)
  }, [ChildBData])

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData('ChildB Data有更動')
        }}
      >
        更動ChildB
      </button>
    </>
  )
}

export default ChildB
