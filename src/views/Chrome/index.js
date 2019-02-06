import React from 'react'

import './Chrome.css'

class Chrome extends React.Component {
  render () {
    return (
      <div className='Chrome'>
        <div id='Content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Chrome
