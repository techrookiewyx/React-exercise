import React, { Component } from 'react'

export default class ClassPropsSon extends Component {
  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li>
        <li>年龄：{this.props.age}</li>
        <li>性别：{this.props.sex}</li>
      </ul>
    )
  }
}
