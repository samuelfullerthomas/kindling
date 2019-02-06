import createAtom from 'tiny-atom'
import log from 'tiny-atom/log'
import actions from './actions'
import { createBrowserHistory } from 'history'
const environment = process.env.NODE_ENV

const initialState = { browserHistory: createBrowserHistory(), text: 'new' }

export default function () {
  return createAtom(initialState, actions, {
    debug: environment === 'development' ? log : false
  })
}
