import React from 'react'
import './message.css'
function Message({text, onRestart}) {
  return (
    <div className='message'>
        <p>{text}</p>
        <button onClick={() => onRestart()}>Start Over</button>
    </div>
  )
}

export default Message
