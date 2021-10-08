import React from 'react'

function Home(props) {
  return (
    <>
      <h2>Home</h2>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
    </>
  )
}

export default Home
