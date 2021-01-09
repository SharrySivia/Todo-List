import Navbar from './components/Navbar/navbar.component';
import AddTodo from './components/Add-todo/add-todo.component';
import Todos from './components/Todos/todos.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
