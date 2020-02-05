import React from 'react'
import './todo.scss'

// eslint-disable-next-line react/prop-types
const Todo = ({ content }) => (
  <li className="todo">
    { content === 'one' ? 'Hello' : 'Hi' }
    ,&nbsp;
    { content }
  </li>
)

export default Todo
