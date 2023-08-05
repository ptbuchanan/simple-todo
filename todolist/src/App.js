import "./App.css"

export default function App() {
  return (
    <> {/* Wrapping in a fragment since having multiple elements returned */}
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item"/>
    </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    {/* Unordered list */}
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger"></button>
      </li>
      <li>
        <label>
          <input type="checkbox"/>
          Item 2
        </label>
        <button className="btn btn-danger"></button>
      </li>
    </ul>
    </>
  )
}