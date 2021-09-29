import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
  // 先解構出屬性名稱變數
  const { name, text, id } = props

  console.log(props)

  // props會以物件的形式將東西傳過來
  return (
    <>
      {/* 子女元件透過props得到父母元件傳來的資料 */}
      <h1>{name}</h1>
      <p>{text}</p>
      <p>{id}</p>
    </>
  )
}

Child.defaultProps = {
  name: 'josh',
  text: 'Hello',
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Child
