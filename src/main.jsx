import React from 'react'
import ReactDOM from 'react-dom/client'
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

  </React.StrictMode>,
)