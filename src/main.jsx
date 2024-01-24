import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'


{/* set custom breakpoints  */ }
import ThemeProvider from 'react-bootstrap/ThemeProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>


      <ThemeProvider breakpoints={['xxl']}
        minBreakpoint="xs">
        <App />
      </ThemeProvider>

    </BrowserRouter>

=======
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> main
  </React.StrictMode>,
)