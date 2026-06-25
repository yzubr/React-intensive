import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'normalize.css'
import './styles.css'

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);