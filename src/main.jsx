import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='header'>Color Generator</h1>
    <App />
  </React.StrictMode>,
)

//App component is imported. 
