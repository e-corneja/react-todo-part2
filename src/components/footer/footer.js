import PropTypes from 'prop-types'

import './footer.css'

import TasksFilter from '../tasks-filter'

function Footer({ items, onClearCompleted, filterBy, onFilterAll, onFilterActive, onFilterCompleted }) {
  const numChecked = items.filter((item) => !item.checked).length

  return (
    <footer className="footer">
      <span className="todo-count">{numChecked} items left</span>
      <TasksFilter
        filterBy={filterBy}
        onFilterAll={onFilterAll}
        onFilterActive={onFilterActive}
        onFilterCompleted={onFilterCompleted}
      />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  onClearCompleted: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  onFilterAll: PropTypes.func.isRequired,
  onFilterActive: PropTypes.func.isRequired,
  onFilterCompleted: PropTypes.func.isRequired,
}

export default Footer
