import React, { useState } from 'react'
import '.././menu.css'

function NavBar() {
  const [isActive, setIsActive] = useState('false')

  const handleToggle = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li>
            <a
              href="home"
              className={isActive ? 'active' : null}
              onClick={handleToggle}
            >
              首頁
            </a>
          </li>
          <li>
            <a href="about us">關於我們</a>
          </li>
          <li>
            <a href="product">產品</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default NavBar
