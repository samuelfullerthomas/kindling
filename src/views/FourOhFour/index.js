import React, { Component } from 'react'
import { connect } from 'tiny-atom/react'

import './FourOhFour.css'

const mapStateToProps = () => {}

const mapActions = [
  'returnToHomepage'
]

class FourOhFour extends Component {
  render () {
    return (
      <div className='FourOhFour'>
        <div className='TitleBoy'>404</div>
        <div>oh no, could not find!</div>
        <div className='Buttonboy' onClick={this.props.returnToHomepage}>return to saftey</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActions)(FourOhFour)
