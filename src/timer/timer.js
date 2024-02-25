import { useEffect, useState } from 'react'
import './timer.css'

function Timer({ minutes, seconds, updateTaskTime }) {
  const [time, setTime] = useState(Number(minutes) * 60 + Number(seconds))
  const [isPlayed, setIsPlayed] = useState(false)

  const minutesString = String(Math.floor(time / 60)).padStart(2, 0)
  const secondsString = String(time % 60).padStart(2, 0)

  function handleTimerStart() {
    setIsPlayed(true)
  }

  function handleTimerStop() {
    setIsPlayed(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlayed) {
        setTime((prevTime) => Math.max(prevTime - 1, 0))
        updateTaskTime(Math.floor(time / 60), time % 60)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlayed, time, updateTaskTime])

  return (
    <span className="timer">
      <button type="button" onClick={handleTimerStart} className="timer-icon icon-play"></button>
      <button type="button" className="timer-icon icon-pause" onClick={handleTimerStop}></button>
      <span className="minutes">{minutesString}</span>
      <span>:</span>
      <span className="seconds">{secondsString}</span>
    </span>
  )
}

export default Timer
