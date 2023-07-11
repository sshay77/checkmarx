import React from 'react'

function Answers({ onAnswer, answers }) {
    return (
        <ol className='answers'>
            {answers.map((answer, i) => (
                <div className='answer' key={i} onClick={() => onAnswer(answer)}>
                    <li>{answer}</li>
                </div>
                ))}
        </ol>
    )
}

export default React.memo(Answers)
