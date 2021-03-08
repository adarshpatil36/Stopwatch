// import React, { useEffect, useState } from 'react';
// import PlayButtons from './PlayButtons';

const PlayButtons = ({start,stop}) =>{
    return(
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

const TileCard = ({title}) => {
    const [data, setData] = useState(0)
    const [start, setStart] = useState(false)
    const [stop, setStop] = useState(true)
    const countRef = React.useRef(null)
  
    const handleStart = () => {
        if(stop){
            countRef.current = setInterval(() => {
               setData((timer) => timer + 1)
            }, 1000)
            setStart(true)
            setStop(false)
        }
      }

    const handleStop = () =>{
        if(start){
            clearInterval(countRef.current)
            setStart(false)
            setStop(true)
        }
    }

    const processTime = (data) => {
        let x = data/(60*60)
        let h = Number.parseInt(x)
        let m = Number.parseInt((x-h)*60)
        let s = Number.parseInt((((x-h)*60)-m)*60)
        
        return `0${h}`.slice(-2)+':'+`0${m}`.slice(-2)+':'+`0${s}`.slice(-2)
    }

    return (
        <div className="TileCard">
            <p>{title}</p>
            <p>{processTime(data)}</p>
            <PlayButtons start={handleStart} stop={handleStop} ></PlayButtons>
        </div>
    )
}

export default TileCard;


// const start = () =>{
    //     console.log(data)

    //     useEffect((data)=>)
    //     id = setInterval((data)=>{
    //         let new_data= data +1
    //         setData(new_data)},1000, data)
    // }

    // useEffect(() => {
    //     console.log("Updated!");
    //   }, [data]);



// const formatTime = (timer) => {
//     const getSeconds = `0${(timer % 60)}`.slice(-2)
//     const minutes = `${Math.floor(timer / 60)}`
//     const getMinutes = `0${minutes % 60}`.slice(-2)
//     const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
//     return `${getHours} : ${getMinutes} : ${getSeconds}`
//   }
  
//   const Timer = () => {
//     const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)
  
//     return (
//       <div className="app">
//         <h3>React Stopwatch</h3>
//         <div className='stopwatch-card'>
//           <p>{formatTime(timer)}</p>
//           <div className='buttons'>
//             {
//               !isActive && !isPaused ?
//                 <button onClick={handleStart}>Start</button>
//                 : (
//                   isPaused ? <button onClick={handlePause}>Pause</button> :
//                     <button onClick={handleResume}>Resume</button>
//                 )
//             }
//             <button onClick={handleReset} disabled={!isActive}>Reset</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   const useTimer = (initialState = 0) => {
//     const [timer, setTimer] = React.useState(initialState)
//     const [isActive, setIsActive] = React.useState(false)
//     const [isPaused, setIsPaused] = React.useState(false)
//     const countRef = React.useRef(null)
  
//     const handleStart = () => {
//       setIsActive(true)
//       setIsPaused(true)
//       countRef.current = setInterval(() => {
//         setTimer((timer) => timer + 1)
//       }, 1000)
//     }
  
//     const handlePause = () => {
//       clearInterval(countRef.current)
//       setIsPaused(false)
//     }
  
//     const handleResume = () => {
//       setIsPaused(true)
//       countRef.current = setInterval(() => {
//         setTimer((timer) => timer + 1)
//       }, 1000)
//     }
  
//     const handleReset = () => {
//       clearInterval(countRef.current)
//       setIsActive(false)
//       setIsPaused(false)
//       setTimer(0)
//     }
  
//     return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
//   }
  
//   const App = () => (
//     <Timer />
//   )
  
  
//   ReactDOM.render(<App />, document.getElementById('root'));