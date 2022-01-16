import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './languages/i18n'
import './styles/index.css'

import store from './store'

import App from './components/App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
