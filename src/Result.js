import React from 'react'
import Message from './Message'

function Result({ successRate, onRestart }) {
    return (

        <>
            <div>Success Rate are {successRate.toFixed(2)}</div>
            {
                successRate < 50 &&
                <Message onRestart={onRestart} text="Try Again and improve" />
            }
            {
                successRate >= 50 && successRate < 90 &&
                <Message onRestart={onRestart} text="Nice attempt but try again" />
            }
            {
                successRate >= 90 &&
                <Message onRestart={onRestart} text="Way to go Champ!!" />
            }

        </>
    )

}

export default Result
