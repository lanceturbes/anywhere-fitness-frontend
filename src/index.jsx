// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

// Component
import App from './App'

const root = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
)
