import './task-list.css'

import Task from '../task'

function TaskList({ items, onDeleteItem, onEditItem, onToggleItem, tasksTime, updateTaskTime }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <Task
          item={item}
          minutes={tasksTime[item.id]?.minutes}
          seconds={tasksTime[item.id]?.seconds}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          key={item.id}
          onToggleItem={onToggleItem}
          updateTaskTime={updateTaskTime}
        />
      ))}
    </ul>
  )
}

export default TaskList
