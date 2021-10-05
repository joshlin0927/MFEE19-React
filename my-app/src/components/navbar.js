import React, { useState } from 'react'
import '.././menu.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

function NavBar() {
  const [isActive, setActive] = useState('false')

  return (
    <Router>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink to="/about_us" className={`${isActive ? '' : 'active'}`}>
            關於我們
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={`${isActive ? '' : 'active'}`}>
            產品
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function AboutUs() {
  return <h2>AboutUs</h2>
}

function Product() {
  return <h2>Product</h2>
}

export default NavBar
