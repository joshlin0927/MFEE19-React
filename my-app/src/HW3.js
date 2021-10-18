import React, { useState } from 'react'

function HW3() {
  const [birthday, setBirthday] = useState('')
  const AgeJudge = () => {
    const result = document.querySelector('#result')
    const birthYear = new Date(birthday).getFullYear()
    const judge = new Date().getFullYear() - 18

    birthYear > judge
      ? (result.innerHTML = `<h2>Younger than 18</h2>`)
      : (result.innerHTML = `<h2>Older than 18</h2>`)
  }
  return (
    <>
      <div id="result"></div>
      <input
        type="date"
        onChange={(e) => {
          setBirthday(e.target.value)
        }}
      ></input>
      <button onClick={AgeJudge}>
        submit
      </button>
      <br />
      <br />
    </>
  )
}

export default HW3
