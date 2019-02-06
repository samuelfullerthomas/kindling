import ReactDOM from 'react-dom'
import React from 'react'
import createRouter from 'space-router'
import { Provider } from 'tiny-atom/react'
import atom from './state/createAtom'

import Chrome from './views/Chrome'
import Home from './views/App'
import FourOhFour from './views/FourOhFour'

createRouter([
  ['', Chrome,
    [
      ['/', Home],
      ['*', FourOhFour]
    ]
  ]
]).start(render)

async function render (route, components) {
  const initialAtom = await atom()
  let view = components.reduceRight((children, Component) =>
    <Provider atom={initialAtom}>
      <Component params={route.params}>{children}</Component>
    </Provider>
    , null)
  ReactDOM.render(view, document.querySelector('#root'))
}
