import React, { Component } from 'react'
import connect from '../../state/atomConnector'

import './App.css'

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

const mapActions = [
  'action'
]

class App extends Component {
  render () {
    const { test, action } = this.props
    return (
      <div
        className='App'
        onClick={() => action(test.repeat(2))}
      >
        <div className='Hello'>{test}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActions)(App)
