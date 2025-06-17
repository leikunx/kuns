import axios from 'axios'
import React, { Component } from 'react'

export default class index extends Component {

    search =() => {
        //获取用户输入：连续解构赋值+重命名
        const {keyWordElement:{value:keyWord}} =this;

        //发送请求前通知App更新状态
        this.props.updataAppState({isFirst:false,isLoad:true})
        
        //发送网络请求
        axios.get(`http://localhost:5000/api1/search/users?q=${keyWord}`).then(
            Response => {
                this.props.updataAppState({isLoading:false,users:Response.data.items})
            },
            Error => {
                this.props.updataAppState({isLoading:false,err:Error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
