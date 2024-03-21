import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import './index.css'
import { store } from './app/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
