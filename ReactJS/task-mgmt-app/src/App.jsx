import { useReducer, useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import { reducer, initialState } from './hook/taskReducer'


function App() {
  // Lazy init from localStorage
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    () => {
      const saved = localStorage.getItem("task63");
      return saved ? JSON.parse(saved) : initialState;
    }
  );

  // Persist whenever state changes
  useEffect(() => {
    localStorage.setItem("task63", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container py-4">
  <TaskList tasks={state} dispatch={dispatch} />
    </div>
  );
}

export default App
