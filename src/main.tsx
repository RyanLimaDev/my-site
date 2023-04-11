import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeColorProvider} from './context/ThemeColorContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeColorProvider>
      <App />
    </ThemeColorProvider> 
  </React.StrictMode>,
)
