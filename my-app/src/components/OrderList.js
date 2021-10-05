import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  // counts -> 陣列
  const { productsInOrder, setProductsInOrder } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((value, i) => {
          return (
            <ProductItem
              key={value.id}
              id={value.id}
              name={value.name}
              category={value.category}
              image={value.image}
              price={value.price}
              count={value.count}
              setCount={(newCount) => {
                //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
                const newProductsInOrder = [...productsInOrder]

                //2. 運算處理：更新陣列中對應商品數量
                // 更新陣列中本商品索引值，如果小於1以1來更新
                newProductsInOrder[i].count = newCount < 1 ? 0 : newCount

                // 因為要將數量為0的商品給刪除，而每項商品以物件呈現並塞在陣列之中，所以必須用splice將指定的物件給抓出來做刪除(這裡的i是map時的index)
                if (newProductsInOrder[i].count < 1) {
                  newProductsInOrder.splice({ i }, 1)
                }
                //3. 設定回原本的狀態
                setProductsInOrder(newProductsInOrder)
              }}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
