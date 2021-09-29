import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent2() {
  // 將資料傳送到 ChildA
  const [parentData, setParentData] = useState('')

  // 為了要給 ChildB 設定資料到 Parent
  const [data, setData] = useState('')

  return (
    <>
      {/* 父母元件就會有階層關係 */}
      <ChildA parentData={parentData} />
      <ChildB setData={setData} />
      <p>由ChildB來的資料：{data}</p>
    </>
  )
}

export default Parent2
