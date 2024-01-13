import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext.tsx'
//import CookieConsent from 'react-cookie-consent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
      {/* <CookieConsent debug={true}>
        this site day use cookies
      </CookieConsent> */}
    </BrowserRouter>
  </React.StrictMode>,
)
