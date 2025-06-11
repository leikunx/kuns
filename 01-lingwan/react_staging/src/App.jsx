import React, { Component } from 'react'
import './App.css'
import Header from './Component/Header'
import List from './Component/List'
import Footer from './Component/Footer'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List/>
          <Footer/>
        </div>
      </div>

    )
  }
}
