import React from 'react'

const PlayButtons = ({start,stop}) =>{
    return(
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default PlayButtons;