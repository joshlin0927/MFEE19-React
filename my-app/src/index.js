import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import NavBar from './NavBar'
// import App_React_Basic from './App_React_Basic'
import HW1_ShoppingCart from './HW1_ShoppingCart'
import HW2 from './HW2'
import HW3 from './HW3'
import HW4 from './HW4'
// import App3_radiobuuton_checkbox from './App3_radiobuuton_checkbox'
// import App4_id_useRef from './App4_id_useRef'
// import App5_form from './App5_form'
// import App6_form2 from './App6_form2'
// import App7_lifeCycle from './App7_lifeCycle'
// import App8_useEffect from './App8_useEffect'
// import App9_bootstrap from './App9_bootstrap'
// import App10_react_bootstrap from './App10_react_bootstrap'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    {/* <App_React_Basic /> */}
    <HW2 />
    <HW3 />
    <HW4 />
    <HW1_ShoppingCart />
    {/* <App3_radiobuuton_checkbox /> */}
    {/* <App4_id_useRef /> */}
    {/* <App5_form /> */}
    {/* <App6_form2 /> */}
    {/* <App7_lifeCycle /> */}
    {/* <App8_useEffect /> */}
    {/* <App9_bootstrap /> */}
    {/* <App10_react_bootstrap /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
