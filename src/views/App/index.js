import React, { Component } from 'react'
import connect from '../../state/atomConnector'

import styles from './App.css'

const mapStateToProps = (state) => {
  return {
    text: state.text,
    counter: state.counter
  }
}

const mapActions = [
  'increment',
  'decrement',
  'setText'
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const { increment, decrement, text, counter } = this.props
    return (
      <div className={styles.TastyAppyBoy}>
        <div className={styles.Hello}>Hello and welcome to {text}!</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Change the title of the app:
          </label>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input className={styles.Buttonboy} type='submit' value='Submit' />
        </form>
        <div>Here be counter: {counter}</div>
        <div className={styles.Clickyboys}>
          <div className={styles.Buttonboy} onClick={increment}>+</div>
          <div className={styles.Buttonboy} onClick={decrement}>-</div>
        </div>
      </div>
    )
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.setText(this.state.value)
  }
}

export default connect(mapStateToProps, mapActions)(App)
