import React, { Component } from 'react'

class LifecycleCC extends Component {
  constructor() {
    super()
    this.state = { total: 0 }

    //這時會先render一次，將一開始有設定的東西render出來 (step1)
  }
  componentDidMount() {
    console.log('componentDidMount')
    // 將資料(要放進架構的內容)掛載 (step3)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
    // 這時的頁面已經更新完成(step5)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // 資料卸載(step final)
  }
  render() {
    // 這時已經將虛擬DOM轉為真實DOM (step2)(step4)
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default LifecycleCC
