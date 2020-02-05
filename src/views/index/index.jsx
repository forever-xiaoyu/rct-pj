/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Todo from '@c/todo'
import styles from './index.scss'

class Index extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      todoList: ['one', 'two', 'three']
    }
  }

  goToPage () {
    this.props.history.push({
      pathname: '/demo'
    })
  }

  render () {
    return (
      <div className="index">
        <ul className={styles.list}>
          {this.state.todoList.map((todo) => (
            <Todo content={todo} key={todo} />
          ))}
        </ul>
        <NavLink to="/demo">GoToPage</NavLink>
        <div onClick={this.goToPage.bind(this)}>ButtonToPage</div>
      </div>
    )
  }
}

export default Index
