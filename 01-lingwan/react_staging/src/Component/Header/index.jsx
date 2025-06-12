import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

console.log(nanoid());

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyup = (event)=>{
    // 解构赋值获取keyCode，target
    const {keyCode,target} = event
    if(keyCode !== 13) return
    const todoObj = {id:nanoid(),name:target.value,done:false}
    // 将todoObj传递给App
    this.props.addTodo(todoObj)
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
