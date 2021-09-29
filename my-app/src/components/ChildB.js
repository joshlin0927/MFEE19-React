import React, { useState } from 'react'

function ChildB(props) {
  const [ChildBData, setChildBData] = useState('')

  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(ChildBData)
        }}
      >
        設定資料到 Parent2
      </button>

    </>
  )
}

export default ChildB
