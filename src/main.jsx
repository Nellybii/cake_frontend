import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'


{/* set custom breakpoints  */ }
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './Login components/User';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <BrowserRouter>
      <ThemeProvider breakpoints={["xxl"]} minBreakpoint="xs">
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);