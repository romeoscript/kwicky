import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
      {/* <CookieConsent debug={true}>
        this site day use cookies
      </CookieConsent> */}
    </BrowserRouter>
  </React.StrictMode>,
)
