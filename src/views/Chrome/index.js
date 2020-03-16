import React from 'react'

import './Chrome.css'

function Chrome (props) {
  return (
    <div className='Chrome'>
      <div id='Content'>
        {props.children}
      </div>
    </div>
  )
}

export default Chrome
