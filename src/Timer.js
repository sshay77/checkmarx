import React, {useEffect} from 'react'

function Timer({time, setTime}) {

    useEffect(() => {
        const timer = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(timer);
    }, [setTime]);

    return (
        <span>Time Elapsed: {time}</span>
    )
}

export default Timer
