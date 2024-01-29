import { useState } from 'react'

import NewTaskForm from '../new-task-form'

import TaskList from '../task-list'

import Footer from '../footer'

import './app.css'

export default function App() {
  const [items, setItems] = useState([])
  const [filterBy, setfilterBy] = useState('all')

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleEditItem(updatedItem) {
    setItems((items) => items.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)))
  }

  function handleClearCompleted() {
    setItems((items) => items.filter((item) => !item.checked))
  }

  function handleFilterAll() {
    setfilterBy('all')
  }

  function handleFilterActive() {
    setfilterBy('active')
  }

  function handleFilterCompleted() {
    setfilterBy('completed')
  }

  const filteredItems = items.filter((item) => {
    if (filterBy === 'active') {
      return !item.checked
    }
    if (filterBy === 'completed') {
      return item.checked
    }
    return true
  })

  return (
    <div className="todoapp">
      <NewTaskForm onAddItems={handleAddItems} />
      <TaskList
        items={filteredItems}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
        onToggleItem={handleToggleItem}
      />
      <Footer
        items={items}
        onClearCompleted={handleClearCompleted}
        filterBy={filterBy}
        onFilterAll={handleFilterAll}
        onFilterActive={handleFilterActive}
        onFilterCompleted={handleFilterCompleted}
      />
    </div>
  )
}
