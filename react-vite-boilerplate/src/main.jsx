import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Greeting, Dab, Picture, Bio, List} from './Greeting.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Dab />
    <Picture />
    <Bio />
    <List />
  </React.StrictMode>,
)
