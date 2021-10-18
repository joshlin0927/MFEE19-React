import React, { useState } from 'react'
import './TodoList.css'
import HW4TodoListItem from './components/HW4TodoListItem'

function HW4() {
  const [todo, setTodo] = useState('')

  const [todoList, setTodoList] = useState([])

  // Enter觸發新增事項
  const addTodo = (e) => {
    if (e.key === 'Enter') {
      const todoObj = { text: todo }
      const newTodoList = [...todoList]
      newTodoList.push(todoObj)
      setTodoList(newTodoList)
      setTodo('')
    }
  }

  // console.log(todoList)

  return (
    <>
      <h2>待辦事項：</h2>
      <input
        id="insertTodo"
        type="text"
        placeholder="請輸入待辦事項"
        onKeyPress={addTodo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      ></input>
      <ul>
        {todoList.map((value, index) => {
          return (
            <HW4TodoListItem
              key={index}
              index={index}
              text={value.text}
              isDone={value.isDone}
              crossOut={(index) => {
                const crossOutList = [...todoList]
                crossOutList[index].isDone = !crossOutList[index].isDone
                setTodoList(crossOutList)
              }}
            />
          )
        })}
      </ul>
    </>
  )
}
export default HW4
