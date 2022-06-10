import React, { Component } from 'react'

export default class News extends Component {
  //开启定时器2秒之后自动跳转
  // componentDidMount(){
  //   setTimeout(()=>{
  //       this.props.history.push('/home/message')
  //   },2000)
  // }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
