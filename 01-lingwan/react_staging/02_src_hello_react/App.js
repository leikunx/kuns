// 创建外壳组件App
import React,{Component} from "react";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

// 暴露App组件
export default App