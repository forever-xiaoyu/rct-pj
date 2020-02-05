/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Demo from '@c/demo'
import styles from './index.scss'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      todoList: ['one', 'two', 'three']
    }
  }

  render () {
    return (
      <div className="index">
        <ul className={styles.list}>
          <li>
            Hello,
            {this.state.todoList[0]}
          </li>
          <Demo />
        </ul>
      </div>
    )
  }
}

// const Index = () => (
//   <div className="index-container">
//     Hello React! This is index
//     <Demo />
//   </div>
// )

export default Index
