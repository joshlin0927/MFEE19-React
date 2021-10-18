import React from 'react'

function HW4TodoListItem(props) {
  const { text, isDone, crossOut, index } = props

  return (
    <>
      <li
        className={`${isDone ? 'finished' : ''}`}
        onClick={() => crossOut(index)}
      >
        {text}
      </li>
    </>
  )
}

export default HW4TodoListItem
