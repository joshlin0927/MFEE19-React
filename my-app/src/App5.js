import React, { useState } from 'react'
import RadioButton from './components/RadioButton'
import CheckBox from './components/CheckBox'

function App5(props) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 在表單完成驗證之後才會觸發 handleSubmit

  const handleSubmit = (e) => {
    // 阻擋form送出的預設行為
    e.preventDefault()

    // 利用formData Api 得到各個欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的屬性：name

    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    console.log(formData.getAll('likeList'))
  }

  return (
    <>
      <h1>HTML5表單驗證</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="5"
        />
        <br />
        <h2>不可控元件</h2>
        <input type="checkbox" value="西瓜" name="likeList" />
        <label>西瓜</label>

        <input type="checkbox" value="房果" name="likeList" />
        <label>芒果</label>
        <br />

        <button>submit</button>
      </form>
    </>
  )
}

export default App5
