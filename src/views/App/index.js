import React, { Component } from 'react'
import connect from '../../state/atomConnector'
import { CSSTransitionGroup } from 'react-transition-group'

import './App.css'

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapActions = [
  'setText'
]

class App extends Component {
  constructor (props) {
    super(props)
    this.interval = setInterval(::this.updateText, 2000)
  }

  render () {
    const { text } = this.props
    return (
      <div
        className='TastyAppyBoy'
        onMouseDown={() => { clearInterval(this.interval) }}
        onMouseUp={() => { this.interval = setInterval(::this.updateText, 2000) }}
      >
        <div className='RowRowRowTheBoat'>
          <div>
            <h1>Kindling</h1>
            <div className='Hello'>
            start something
              <CSSTransitionGroup
                transitionName='Text'
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <span className='Text' key={text} >{text}</span>
              </CSSTransitionGroup>
            </div>
            <a
              className='LinkyBoy'
              href='//github.com/samuelfullerthomas/kindling'
            >
              Check it out on Github
            </a>
          </div>
          <img className='Bane' src='/kindling.png' />
        </div>
      </div>
    )
  }

  updateText () {
    const { text, setText } = this.props
    const options = [
      'amazing',
      'new',
      'different',
      'strange',
      'cool',
      'beautiful',
      'wonderful',
      'uplifting',
      'just',
      'today',
      'because',
      'now',
      'cheerful'
    ]
    options.splice(options.indexOf(text), 1)
    const random = Math.round(Math.random() * options.length)
    const newText = options[random]
    setText(newText)
  }
}

export default connect(mapStateToProps, mapActions)(App)
