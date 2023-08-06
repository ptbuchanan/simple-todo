import {useState} from "react"
import "./App.css"

export default function App() {
  /* Returning an array of two different values:  
  First is whatever the value is
  Second is a function of the new value
  */
  const [newItem, setNewItem] = useState("Item 1")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: 
          false},
      ]     
    })
  }
   

  return (
    <> {/* Wrapping in a fragment since having multiple elements returned */}
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item"/>
    </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
    {todos.map(todo => {
      return ( 
      <li key={todo.id}>  {/* React needs to know which element changed.  The key let's React know.  Do not use the index */}
        <label>
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      )
    })}
    </ul>
    </>
  )
}