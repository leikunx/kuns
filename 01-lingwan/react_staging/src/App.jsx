import React, { Component } from 'react'
import './App.css'
import Header from './Component/Header'
import List from './Component/List'
import Footer from './Component/Footer'

export default class App extends Component {

  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
  ]}

  //addTodo用于添加一个todo,用于接收的参数是todo对象
  addTodo = (todoObj)=>{
    // 获取原todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  //用于更新一个todo对象
  updateTodo = (id,done) =>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return{...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //用于删除一个todo
  deleteTodo = (id)=>{
    //获取原来的todo
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //全选/取消全选
  checkAllTodos = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done}
    })
    this.setState({todos:newTodos})
  }

  //清除所有已完成
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAll={this.checkAllTodos} clearAllDone={this.clearAllDone}/>
        </div>
      </div>

    )
  }
}
