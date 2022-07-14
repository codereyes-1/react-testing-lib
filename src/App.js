import "./App.css";
import todo from "./components/todo";
import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "label packages", completed: true },
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
