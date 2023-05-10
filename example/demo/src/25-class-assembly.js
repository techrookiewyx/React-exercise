import React, { Component } from 'react'
import ClassPropsSon from './26-class-props'

export default class CreateClass extends Component {
  render() {
    return (
      <div>
        <h1>类组件创建</h1>
        <ClassPropsSon name='张三' age='16' sex='男'/>
      </div>
    )
  }
}
