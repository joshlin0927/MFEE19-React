import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Member from './pages/Member'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

import UserAdminIndex from './pages/sub-member/UserAdminIndex'

import './menu.scss'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function NavBar() {
  // 會員是否有登入，有登入的話要為true
  const [auth, setAuth] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // didMount
  useEffect(() => {
    // 判斷是否有登入
    // 如果有登入，setAuth要為true
    if (auth) {
      setAuth(true)
    }
    //請localstorage中的購物車數量
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    // 設定為陣列的長度(成員數量)
    setCartCount(myCart.length)
  }, [])

  return (
    <Router>
      <>
        <ul className="menu">
          <li>
            <NavLink to="/home" activeClassName="active">
              首頁
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" activeClassName="active">
              關於我們
            </NavLink>
          </li>
          <li>
            <NavLink to="/Product" activeClassName="active">
              我的課程
            </NavLink>
          </li>
          <li>
            <NavLink to="/Member" activeClassName="active">
              會員中心
            </NavLink>
          </li>
          <li>
            <NavLink to="/Login" activeClassName="active">
              會員登入
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart" activeClassName="active">
              購物車
            </NavLink>
          </li>
          <li>
            <button type="button" className="btn btn-primary">
              購物數量 <span className="badge badge-light">{cartCount}</span>
              <span className="sr-only"></span>
            </button>
          </li>
        </ul>
        <MultiLevelBreadCrumb />

        <Switch>
          {/* 路徑長的放在上面，接近的要在 path 前面加上 exact */}
          <Route path="/Product/ProductDetail/:id?">
            <ProductDetail auth={auth} />
          </Route>

          <Route path="/Product">
            <Product
              auth={auth}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          </Route>
          <Route path="/AboutUs">
            <AboutUs auth={auth} />
          </Route>
          <Route path="/Login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route path="/Member">
            <Member />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/admin/user/:task?">
            <UserAdminIndex />
          </Route>
          <Route path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default NavBar
