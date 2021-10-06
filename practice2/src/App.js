import React, { useState, useEffect } from 'react'
import './App.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar'

import { data } from './data/'

function App() {
  // 產品用的資料
  // 1. 從伺服器來的原始資料
  const [products, setProducts] = useState([])

  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([])

  const [tags, setTags] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  // 一開始也會載入
  useEffect(() => {
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  const searchResult = () => {
    // 1. 從陣列中抓取物件
    // 2. 輸入的文字要與產名稱相同(產品名稱要含有輸入的文字)

    // const newDisplayProducts = [...displayProducts]
    // let result = products.includes('12')
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar />
                    <ProductList products={displayProducts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
