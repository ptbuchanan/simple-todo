import {useState, useEffect} from "react"
import "./App.css"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
  /* Returning an array of two different values:  
  First is whatever the value is
  Second is a function of the new value
  */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  })

  // Running addTodo every time it changes
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: 
          false},
      ]     
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
   
  return (
    <> {/* Wrapping in a fragment since having multiple elements returned */}
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}