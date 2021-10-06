import React, { useState } from 'react'
import '.././menu.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from 'react-router-dom'

// function NavBar() {
//   return (
//     <Router>
//       <ul>
//         <li>
//           <NavLink to="/home" activeClassName="active">
//             首頁
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about_us" activeClassName="active">
//             關於我們
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/product" activeClassName="active">
//             產品
//           </NavLink>
//         </li>
//       </ul>
//       <Switch>
//         <Route path="/about">
//           <AboutUs />
//         </Route>
//         <Route path="/product">
//           <Product />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   )
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function AboutUs() {
//   return <h2>AboutUs</h2>
// }

// function Product() {
//   return <h2>Product</h2>
// }

function NavBar() {
  // const
  const [isActive, setIsActive] = useState()
  const [isActive2, setIsActive2] = useState()
  const [isActive3, setIsActive3] = useState()

  const home = document.querySelector('#home')
  // console.log(typeof home)
  // const changeClass = (links) => {
  //   // console.log(links.target.innerText)

  //   setIsActive(!isActive)
  // }

  return (
    <>
      <ul>
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

export default NavBar
