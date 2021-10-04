import React, { useState } from 'react'
import '.././menu.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function NavBar() {
  const [isActive, setActive] = useState('false')

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <Router>
      <ul>
        <li>
          <Link
            to="/"
            onClick={handleToggle}
            className={`${isActive ? '' : 'active'}`}
          >
            首頁
          </Link>
        </li>
        <li>
          <Link
            to="/about_us"
            onClick={handleToggle}
            className={`${isActive ? '' : 'active'}`}
          >
            關於我們
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            onClick={handleToggle}
            className={`${isActive ? '' : 'active'}`}
          >
            產品
          </Link>
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
