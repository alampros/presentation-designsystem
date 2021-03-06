/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Presentation from './src'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Presentation)

if(module.hot) {
  module.hot.accept('./src', () => { render(Presentation) })
}
