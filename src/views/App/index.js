import React from 'react'
import { useAtom, useActions } from 'tiny-atom/react/hooks'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import KindlingSVG from '../../components/KindlingSVG'

import './App.css'

function updateText (text, setText) {
  const options = [
    'amazing',
    'viral',
    'stellar',
    'different',
    'strange',
    'beautiful',
    'wonderful',
    'uplifting',
    'joyful'
  ]
  options.splice(options.indexOf(text), 1)
  const random = Math.round(Math.random() * options.length)
  const newText = options[random]
  setText(newText)
}

function App () {
  const text = useAtom(state => state.text)
  const { setText } = useActions()
  const boundUpdate = updateText.bind(null, text, setText)
  setTimeout(boundUpdate, 4000)

  return (
    <div className='TastyAppyBoy'>
      <div className='RowRowRowTheBoat'>
        <div className='HelloButOusideAndUp'>
          <h1>Kindling</h1>
          <div className='Hello'>
            start something
            <TransitionGroup component='span'>
              <CSSTransition
                classNames='Text'
                key={text + Math.random()}
                timeout={{ exit: 2000, enter: 2000 }}
              >
                <span className='Text'>{text}</span>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <div
            className='ButtonyBoy'
            onClick={() => {
              window.location.href = '//github.com/samuelfullerthomas/kindling'
            }}
          >
            check it out on github
          </div>
        </div>
        <KindlingSVG className='kindling' />
      </div>
    </div>
  )
}

export default App
