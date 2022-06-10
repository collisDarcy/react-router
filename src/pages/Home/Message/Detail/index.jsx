import React, { Component } from 'react'
// import qs from 'querystring-es3'
// 对象转urlencoded格式：qs.stringify()
// urlencoded格式转对象：qs.parse()
export default class Detail extends Component {
  state ={
    DatailData:[
      {
        id:'01',content:'你好'
      },
      {
        id:'02',content:'我不好'
      },{
        id:'03',content:'为什么不好'
      }
    ]
  }
  render() {
    // console.log(this.props)
    //接收params参数
    const {id,title}=this.props.match.params
    //接收search参数
    // const {search}=this.props.location
    //urlencoded格式转对象格式
    // const {id,title}=qs.parse(search.slice(1))
    // 接收state参数
    // const {id,title}=this.props.location.state||{}
    const {DatailData}=this.state
    const result=DatailData.find((dataObj)=>{
      return dataObj.id===id
    })||{}
    return (
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{result.content}</li>
      </ul>
    )
  }
}
