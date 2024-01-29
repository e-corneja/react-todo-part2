import './tasks-filter.css'

function TasksFilter({ filterBy, onFilterAll, onFilterActive, onFilterCompleted }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" className={filterBy === 'all' ? 'selected' : ''} onClick={onFilterAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={filterBy === 'active' ? 'selected' : ''} onClick={onFilterActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={filterBy === 'completed' ? 'selected' : ''} onClick={onFilterCompleted}>
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
