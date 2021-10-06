import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import NavBar from './components/NavBar'
// import App_React_Basic from './App_React_Basic'
// import ShoppingCart from './ShoppingCart'
// import App3_radiobuuton_checkbox from './App3_radiobuuton_checkbox'
// import App4_id_useRef from './App4_id_useRef'
// import App5_form from './App5_form'
// import App6_form2 from './App6_form2'
// import App7_lifeCycle from './App7_lifeCycle'
// import App8_useEffect from './App8_useEffect'
import App9_bootstrap from './App9_bootstrap'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    {/* <App_React_Basic /> */}
    {/* <ShoppingCart /> */}
    {/* <App3_radiobuuton_checkbox /> */}
    {/* <App4_id_useRef /> */}
    {/* <App5 /> */}
    {/* <App6 /> */}
    {/* <App7 /> */}
    {/* <App8_useEffect /> */}
    <App9_bootstrap />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
