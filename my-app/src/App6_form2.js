import React, { useState } from 'react'
import RadioButton2 from './components/RadioButton2'
import CheckBox2 from './components/CheckBox2'
import './App.css'

function App6(props) {
  // 使用物件值作為狀態值，儲存所有欄位的值

  const [fields, setFields] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '', // 可能只在瀏覽器檢查用而已
    intro: '',
    gender: '',
    likeList: [],
  })

  const [fieldErrors, setFieldErrors] = useState({
    userName: '',
    email: '',
    password: '',
  })
  // radio - 專用元件
  // RadioButton元件有修改
  const genderOptions = ['男', '女', '不提供', '不確定']
  // checkbox - 專用元件
  // CheckBox 元件有修改
  const fruitOptions = ['芒果', '西瓜', '芭樂', '香蕉']

  const handleFieldChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const type = e.target.type

    // 預設值為輸入值
    let newValue = value

    // checkbox為陣列值
    if (type === 'checkbox') {
      // toggle 切換
      // 如果目前包含在這狀態陣列 -> 移出 / 如果沒包含在這狀態陣列中 -> 加入
      newValue = fields[name].includes(value)
        ? fields[name].filter((v, i) => {
            return v !== value
          })
        : [...fields[name], value]
    }
    // 1. 從原本的狀態物件拷貝新物件 / 2. 在拷貝的新物件上處理
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    const updatedFields = {
      ...fields,
      [name]: newValue,
    }

    // 3. 設定回原狀態物件
    setFields(updatedFields)
  }

  // 在表單完成驗證之後才會觸發 handleSubmit

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }
  const handleFormInvalid = (e) => {
    // 阻擋form送出的預設行為(泡泡訊息)
    e.preventDefault()

    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }
    setFieldErrors(updatedFieldErrors)
  }

  const handleSubmit = (e) => {
    // 阻擋form送出的預設行為
    e.preventDefault()

    // 利用formData Api 得到各個欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的屬性：name

    const formData = new FormData(e.target)
    console.log(formData.get('userName'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    console.log(formData.get('intro'))
    console.log(formData.get('gender')) //只需要一個值
    console.log(formData.getAll('likeList')) //需要所有值

    // 檢查確認密碼欄位
    if (formData.get('password') !== formData.get('confirmPassword')) {
      const updatedFieldErrors = {
        ...fieldErrors,
        password: '密碼與確認密碼欄位輸入值不相同',
        confirmPassword: '密碼與確認密碼欄位輸入值不相同',
      }
      setFieldErrors(updatedFieldErrors)
    }
    // ex. 以下用fetch api/axious送到伺服器
  }

  return (
    <>
      <h1>HTML5表單驗證</h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
      >
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={fields.userName}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.userName !== '' && (
          <small className="error">{fieldErrors.userName}</small>
        )}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.email !== '' && (
          <small className="error">{fieldErrors.email}</small>
        )}
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        {fieldErrors.password !== '' && (
          <small className="error">{fieldErrors.password}</small>
        )}
        <br />
        <label>Confirm Password</label>
        <input
          type="text"
          name="ConfirmPassword"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"
        />
        {fieldErrors.password !== '' && (
          <small className="error">{fieldErrors.password}</small>
        )}
        <br />
        <label>intro</label>
        <br />
        <textarea
          type="text"
          name="password"
          value={fields.intro}
          onChange={handleFieldChange}
        ></textarea>
        <br />
        <label>性別</label>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton2
              key={i}
              name="gender"
              value={v}
              onChange={handleFieldChange}
              checked={fields.gender === v}
            />
          )
        })}
        <br />
        <label>喜好</label>
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox2
              name="likeList"
              key={i}
              value={v}
              onChange={handleFieldChange}
              checked={fields.likeList.includes(v)}
            />
          )
        })}
        <br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App6
