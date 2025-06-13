import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class List extends Component {

  //对接收的props进行类型、必要性限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos,updateTodo, delateTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item
              key={todo.id}
              {...todo}
              updateTodo={this.props.updateTodo}
              deleteTodo={this.props.deleteTodo}
            />
          })
        }
      </ul>
    )
  }
}
