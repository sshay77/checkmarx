import React from 'react'

function Result({ successRate, onRestart }) {
    return (

        <>
            <div>Success Rate are {successRate.toFixed(2)}</div>
            {
                successRate < 50 &&
                <button onClick={() => onRestart()}>Try Again and improve</button>
            }
            {
                successRate >= 50 && successRate < 90 &&
                <button onClick={() => onRestart()}>Nice attempt but try again</button>
            }
            {
                successRate >= 90 &&
                <button onClick={() => onRestart()}>Way to go Champ!!</button>
            }

        </>
    )

}

export default Result
