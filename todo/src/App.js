import React, { useReducer } from 'react';
import reducer from './reducers/ultimateReducer'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { Badge } from 'reactstrap'

import './App.css';

const initalState = {
  currentText: "",
  todoList: [],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <div className="wrapper">
      <h1><Badge color="dark">Caleb's Fantastic Todo List</Badge></h1>
      <AddTodo
        state={state}
        dispatch={dispatch}
      />
      <TodoList
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
