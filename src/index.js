import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './Components/App'
import handleChangeReducer from './Reducers/handleChange'
import { createStore } from 'redux';

const store = createStore(handleChangeReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)