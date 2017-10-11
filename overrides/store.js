/* eslint-disable global-require */
import { createStore } from 'redux'
import reducer from 'spectacle/src/reducers'

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('spectacle/src/reducers', () => {
      const nextReducer = require('spectacle/src/reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
};

export default configureStore
