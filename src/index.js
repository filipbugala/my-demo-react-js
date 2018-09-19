import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './redux/configureStore';
import { Provider } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();