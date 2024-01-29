import './task-list.css'

import Task from '../task'

function TaskList({ items, onDeleteItem, onEditItem, onToggleItem }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <Task
          item={item}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          key={item.id}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  )
}

export default TaskList
