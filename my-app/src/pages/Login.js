import React from 'react'
import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'

function Login(props) {
  const { auth, setAuth } = props
  return (
    <>
      <h2>Login</h2>
      <br />
      <p> 會員登入情況：{auth ? '已登入' : '還未登入'}</p>
      <br />
      <button
        onClick={() => {
          setAuth(true)
          //出現歡迎訊息
          alert('你好，登入已完成！')
          //跳回首頁
          // props.history.push('/')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >返回上衣業</button>
    </>
  )
}

export default withRouter(Login)
