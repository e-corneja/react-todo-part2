import { useState } from 'react'

import './new-task-form.css'

function NewTaskForm({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()

      if (!description.trim()) return

      const newItem = {
        description,
        checked: false,
        id: Date.now(),
        minutes,
        seconds,
        date: new Date(),
      }

      onAddItems(newItem, minutes, seconds)

      setDescription('')
      setMinutes('')
      setSeconds('')
    }
  }

  return (
    <>
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={handleKeyDown}
        />
        <input
          value={minutes}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            const input = e.target.value
            if (/^\d*$/.test(input)) setMinutes(input)
          }}
          type="text"
          inputMode="numeric"
          className="new-todo-form__timer"
          placeholder="Min"
        />
        <input
          type="text"
          value={seconds}
          onChange={(e) => {
            const input = e.target.value
            if (/^\d*$/.test(input) && Number(input) <= 59) {
              setSeconds(input)
            }
          }}
          className="new-todo-form__timer"
          placeholder="Sec"
          onKeyDown={handleKeyDown}
        />
      </form>
    </>
  )
}

export default NewTaskForm
