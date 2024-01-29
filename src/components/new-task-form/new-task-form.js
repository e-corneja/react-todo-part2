import { useState } from 'react'

import './new-task-form.css'

function NewTaskForm({ onAddItems }) {
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!description.trim()) return

    const newItem = {
      description,
      checked: false,
      id: Date.now(),
      date: new Date(),
    }

    onAddItems(newItem)

    setDescription('')
  }
  return (
    <form className="header" onSubmit={handleSubmit}>
      <h1>todos</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  )
}

export default NewTaskForm
