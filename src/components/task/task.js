import { formatDistanceToNow } from 'date-fns'

import PropTypes from 'prop-types'

import { useState } from 'react'
import Timer from '../../timer'

import './task.css'

function Task({ item, minutes, seconds, onDeleteItem, onEditItem, onToggleItem, updateTaskTime }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newDescription, setNewDescription] = useState(item.description)

  const timeAgo = formatDistanceToNow(item.date)

  function handleEdit() {
    setIsEditing(true)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!newDescription.trim()) return

    const updatedItem = {
      ...item,
      description: newDescription,
    }
    onEditItem(updatedItem)
    setIsEditing(false)
  }

  return (
    <li className={isEditing ? 'edit' : ''}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit-input"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </form>
      ) : (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.checked}
            onChange={() => {}}
            onClick={() => onToggleItem(item.id)}
          />
          <label>
            <span className={item.checked ? 'completed description' : 'description'}>{item.description}</span>
            <Timer minutes={minutes} seconds={seconds} updateTaskTime={(m, s) => updateTaskTime(item.id, m, s)} />
            <span className="created">created {timeAgo} ago</span>
          </label>
          <button type="button" className="icon icon-edit" onClick={handleEdit} disabled={item.checked}></button>
          <button type="button" className="icon icon-destroy" onClick={() => onDeleteItem(item.id)}></button>
        </div>
      )}
    </li>
  )
}

Task.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onToggleItem: PropTypes.func,
}

export default Task
