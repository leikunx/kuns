import React, { Component } from 'react';
import Search from './component/Search';
import List from './component/List';

export default class App extends Component {

  state = {//初始化状态
    users:[],//users为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:''//储存请求相关的错误信息
  }

  //更新APP的state
  updataAppState = (stateObj)=>{
    this.setState({stateObj})
  }

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.updataAppState}/>
        <List {...this.state}/>
        <div>aaa</div>
      </div>
    )
  }
}
