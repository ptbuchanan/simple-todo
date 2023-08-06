import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
    <ul className="list">  
    {/* Short circuiting technique */}
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
        // Passing all the propr by doing ...
        return (
            <TodoItem 
                {...todo}  
                key={todo.id} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo}
            />  
        )     
    })}
    </ul> 
  )
}