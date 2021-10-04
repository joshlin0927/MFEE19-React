import React from 'react'

function InputID(props) {
  return (
    <>
      <h2>使用者帳號(id)</h2>
      <input type="text" id="username" />
      <button
        onClick={() => {
          document.querySelector('#username').value = 'Hello'
        }}
      >
        設定值為Hello
      </button>
      <button
        onClick={() => {
          document.querySelector('username').focus()
        }}
      >
        聚焦
      </button>
    </>
  )
}

export default InputID
