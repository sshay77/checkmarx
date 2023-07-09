import React from 'react'

function Answers({ onAnswer, answers }) {
    return (
        <ol className='answers'>
            {answers.map((answer, i) => (
                <li key={i} onClick={() => onAnswer(answer)}>{answer}</li>
            ))}
        </ol>
    )
}

export default React.memo(Answers)
