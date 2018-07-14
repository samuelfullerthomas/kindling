import React, { Component } from 'react'
import connect from '../../state/atomConnector'

import styles from './FourOhFour.css'

const mapStateToProps = () => {}

const mapActions = [
  'returnToHomepage'
]

class FourOhFour extends Component {
  render () {
    return (
      <div className={styles.FourOhFour}>
        <div className={styles.TitleBoy}>404</div>
        <div>oh no, could not find!</div>
        <div className={styles.Buttonboy} onClick={this.props.returnToHomepage}>return to saftey</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActions)(FourOhFour)
