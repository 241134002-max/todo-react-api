import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // ambil data dari API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (input === "") return;
    setTodos([...todos, { title: input }]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>📝 To-Do List App</h1>

     <div className="input-area">
  <input
    type="text"
    placeholder="Tambah todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button onClick={addTodo}>Tambah</button>
</div>


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
