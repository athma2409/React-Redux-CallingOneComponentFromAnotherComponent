// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


    
import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import App from "./components/App";
import View from './components/View'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
    <View />
  </Provider>,
  document.getElementById('root')
)