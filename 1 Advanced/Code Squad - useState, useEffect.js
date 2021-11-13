// Source
// [React hooks] #1. useState, useEffect by Code Squad
// https://www.youtube.com/watch?v=y52Av3JxNW4&ab_channel=%EC%BD%94%EB%93%9C%EC%8A%A4%EC%BF%BC%EB%93%9C


// App.js
import React, { Fragment, Component, useState, useEffect } from 'react'
import Effect from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import List from './List.jsx'

function App() {
  // todo preserves the State value.
  const [todos, setTodos] = useState(['make react project']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  // useEffect is used to handle post-rendering tasks.
  useEffect(() => {
    console.log("list has been updated.")
  }, [todos]);  // use case: fetching, logging

  return (
    <Fragment>
      <h1> todo app</h1>

      <form action="">
        <input type='text' name='' onChange={changeInputData}/>
        <button onClick={addTodo}>Add task</button>
      </form>

      <List todos={todos}/>

      </Fragment>
  );
}

export default App


// List.jsx
import React from 'react'

export const List = ({todos}) => {
    const todoList = todos.map( todo => <li>{todo}</li> )
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List;
