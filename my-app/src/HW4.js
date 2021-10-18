import React, { useState } from 'react'

function HW4() {
  const [todo, setTodo] = useState(' ')
  const todoList = document.querySelector('#todoList')

  const Add = () => {
    todoList.innerHTML += '<li>' + todo + '</li>'
  }

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      Add()
    }
  }

  return (
    <>
      <div id="todoList">
        <ul></ul>
      </div>
      <input
        type="text"
        onKeyPress={addTodo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      ></input>
    </>
  )
}
export default HW4
