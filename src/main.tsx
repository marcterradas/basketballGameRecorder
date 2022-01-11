import React from 'react'
import ReactDOM from 'react-dom'

import './store'

import './languages/i18n'
import './styles/index.css'

import App from './components/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
