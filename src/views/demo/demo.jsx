/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import styles from './demo.scss'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'this is a demo view'
    }
  }

  render () {
    return (
      <div className="index">
        <ul className={styles.list}>
          { this.state.title }
        </ul>
      </div>
    )
  }
}

export default Demo
