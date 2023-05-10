import React, { Component } from 'react'

export default class ClassState extends Component {
  state = {
    count:0
  }
  //在类组件中无法响应定义函数，只能通过类的方法来定义
  clickHandler = ()=>{
    this.setState(prevState => { 
      return {count:prevState.count+1}
    });
  }
  render() {
    return (
      <div>      
        <div>{this.state.count}</div>
        <button onClick={this.clickHandler}></button>
      </div>
    )
  }
}
