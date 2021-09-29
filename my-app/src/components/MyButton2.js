import React from 'react'

function MyButton2(props) {
  const { text, value, changeTotal } = props
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          changeTotal(value)
        }}
      >
        {text}
      </button>
    </>
  )
}

export default MyButton2
