import React, { useReducer } from 'react';
import reducer from './reducers/ultimateReducer'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import './App.css';

const initalState = {
  currentText: "",
  todoList: [],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <div>
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
