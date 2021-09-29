import React from 'react'

// 每個新的JS都一定要引用React
// CC = Class component
// 一定要用render包住

class FormCC extends React.Component {
  constructor() {
    super()
    // 定義狀態的初始值
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <>
        <h2>FormCC 類別型元件</h2>
        username:
        <input
          type="text"
          value={this.state.username}
          onChange={(event) => {
            this.setState({
              username: event.target.value,
            })
          }}
        />
        password:
        <input
          type="text"
          value={this.state.password}
          onChange={(event) => {
            this.setState({
              password: event.target.value,
            })
          }}
        />
      </>
    )
  }
}

export default FormCC
