import React, { useState } from 'react'

function HW4() {
  const [todo, setTodo] = useState(' ')
  const [todoList, setTodoList] = useState([])

  const addTodo = (e) => {
    if (e.key === 'Enter') {
    }
  }

  return (
    <>
       <h2>待辦事項：</h2>
      <input
        type="text"
        placeholder="請輸入待辦事項"
        onKeyPress={addTodo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      ></input>
      <ul >
        
      </ul>
    </>
  )
}
export default HW4
