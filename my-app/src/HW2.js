import React, { useState } from 'react'
import './menu.scss'

function HW2() {
  const [isActive, setIsActive] = useState()

  return (
    <>
      <ul className="menu">
        <li>
          <a
            id="home"
            className={`${isActive == '1' ? 'active' : ''}`}
            onClick={() => setIsActive('1')}
          >
            APP
          </a>
        </li>
        <li>
          <a
            id="aboutUs"
            className={`${isActive == '2' ? 'active' : ''}`}
            onClick={() => setIsActive('2')}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            id="product"
            className={`${isActive == '3' ? 'active' : ''}`}
            onClick={() => setIsActive('3')}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}

export default HW2
