export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
    <li>  
        <label>
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={e => toggleTodo(id, e.target.checked)}
            />
          {title}
        </label>
        {/* Must pass a function for the on click so it actually has the results */}
        <button onClick={() => deleteTodo(id)} className="btn btn-danger"> 
        Delete
        </button>
      </li>
    
    )
}