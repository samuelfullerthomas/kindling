import React from 'react'
import { useActions } from 'tiny-atom/react/hooks'

import './FourOhFour.css'

const mapStateToProps = () => {}


function FourOhFour () {
  const { returnToHomepage } = useActions()
  return (
    <div className='FourOhFour'>
      <div className='TitleBoy'>404</div>
      <div>oh no, could not find!</div>
      <div className='Buttonboy' onClick={returnToHomepage}>return to saftey</div>
    </div>
  )
}

export default FourOhFour
