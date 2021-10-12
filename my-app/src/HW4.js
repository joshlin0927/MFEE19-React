import React, { useState } from 'react'

function HW4() {
  const [todo, setTodo] = useState(' ')
  const todoList = document.querySelector('#todoList')

  const Add = () => {
    console.log(todo)
    todoList.innerHTML += '<li>' + todo + '</li>'
  }

  return (
    <>
      <div id="todoList">
        <ul></ul>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      ></input>
      <button className="btn btn-primary" onClick={Add}>
        submit
      </button>
    </>
  )
}
export default HW4
