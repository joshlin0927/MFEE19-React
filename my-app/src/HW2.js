import React, { useState } from 'react'
import './menu.scss'

function HW2() {
  const [isActive, setIsActive] = useState()
  const [isActive2, setIsActive2] = useState()
  const [isActive3, setIsActive3] = useState()

  return (
    <>
      <ul className="menu">
        <li>
          <a
            id="home"
            className={`${isActive ? 'active' : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            APP
          </a>
        </li>
        <li>
          <a
            id="aboutUs"
            className={`${isActive2 ? 'active' : ''}`}
            onClick={() => setIsActive2(!isActive2)}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            id="product"
            className={`${isActive3 ? 'active' : ''}`}
            onClick={() => setIsActive3(!isActive3)}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}

export default HW2
