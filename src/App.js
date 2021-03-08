import './App.css';
import React, { useState } from 'react';

const PlayButtons = ({handleStart,handleStop,isStart}) =>{
  return(
      <div>
          <button onClick={handleStart}>{isStart ? 'Pause': 'Start'}</button>
          <button onClick={handleStop}>Stop</button>
      </div>
  )
}

const TileCard = ({title, initial=0, interval=1}) => {
  const [data, setData] = useState(Number.parseInt(initial))
  const [start, setStart] = useState(false)
  const countRef = React.useRef(null)

  const handleStart = () => {
      if(!start){
          countRef.current = setInterval(() => {
             setData((timer) => timer + Number.parseInt(interval))
          }, 1000)
          setStart(true)
      } else {
          clearInterval(countRef.current)
          setStart(false)
      }
    }

  const handleStop = () =>{
      clearInterval(countRef.current)
      setStart(false)
      setData(0)
  }

  const processTime = (data) => {
      let temp = data/(60*60)
      let hrs = Number.parseInt(temp)
      let mins = Number.parseInt((temp-hrs)*60)
      let secs = Math.round((((temp-hrs)*60)-mins)*60)
      console.log(data," ",temp," ",hrs," ",mins," ",secs)
      return `0${hrs}`.slice(-2)+':'+`0${mins}`.slice(-2)+':'+`0${secs}`.slice(-2)
  }
  return (
      <div className="TileCard">
          <p>{title}</p>
          <p>{processTime(data)}</p>
          <PlayButtons handleStart={handleStart} handleStop={handleStop} isStart={start}></PlayButtons>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <TileCard title="Timer 1" ></TileCard>
      <TileCard title="Timer 2" initial="4" interval="6"></TileCard>
      <TileCard title="Timer 3" initial="9" interval="10"></TileCard>
    </div>
  );
}

export default App;
