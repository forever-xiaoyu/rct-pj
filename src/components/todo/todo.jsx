import React from 'react'
import './todo.scss'


const Todo = ({ content }) => (
  <li className="todo">
    Hello,
    { content }
  </li>
)


export default Todo
