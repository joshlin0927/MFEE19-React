import { useState } from 'react'
import './App2.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]

// 初始化狀態用的函式，這裡的array只是代稱，用於將使用函式時的陣列(這裡的例子是陣列)帶入
const initState = (array) => {
  const state = []
  for (let i = 0; i < array.length; i++) {
    state.push(1)
  }
  return state
}

function ShoppingCart() {
  // 多樣產品狀態：陣列
  // 陣列裡放得是各項商品的數量 -> [1,1,1]
  // 下面兩種方式均可
  const [counts, setCounts] = useState(initState(products))
  //   const [counts, setCounts] = useState(Array(products.length).fill(1))

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0
    for (let i; i < counts.length; i++) {
      totalCount += counts[i]
    }
    return totalCount
  }

  const total = () => {
    let sum = 0
    for (let i; i < products.length; i++) {
      sum += counts[i] * products[i].price
    }
    return sum
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} counts={counts} setCounts={setCounts} />
        <Summary productCount={productCount()} total={total()} />
      </div>
    </div>
  )
}

export default ShoppingCart
