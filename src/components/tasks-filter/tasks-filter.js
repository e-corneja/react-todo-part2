import './tasks-filter.css'

function TasksFilter({ filterBy, onFilterAll, onFilterActive, onFilterCompleted }) {
  const filterClass = {
    all: filterBy === 'all' ? 'selected' : '',
    active: filterBy === 'active' ? 'selected' : '',
    completed: filterBy === 'completed' ? 'selected' : '',
  }

  return (
    <ul className="filters">
      <li>
        <button type="button" className={filterClass.all} onClick={onFilterAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={filterClass.active} onClick={onFilterActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={filterClass.completed} onClick={onFilterCompleted}>
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filterBy: 'all',
}

export default TasksFilter
