import React, { useState } from 'react'

// 每個新的JS都一定要引用React，這裡的是部分引用，只引用useState
// Fc = functional component

function FormFC() {
  //state(物件值)，不要寫以下幾種：null、{}、沒寫任何東西
  //要把物件值中的屬性描述出來
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  return (
    <>
      <h2>Form - Fc</h2>
      username:
      <input
        type="text"
        value={loginData.username}
        onChange={(event) => {
          setLoginData({
            ...loginData,
            username: event.target.value,
          })
        }}
      />
      password:
      <input
        type="text"
        value={loginData.password}
        onChange={(event) => {
          setLoginData({
            ...loginData,
            password: event.target.value,
          })
        }}
      />
    </>
  )
}

export default FormFC
