import React, { Component } from 'react'
import { Link,Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: '01', title: '消息1', conent: '你好'
      },
      {
        id: '02', title: '消息2', conent: '我不好'
      },
      {
        id: '03', title: '消息3', conent: '为什么不好'
      }
    ]
  }
 
  pushShow=(id,title)=>{
    this.props.history.push(`/home/message/detail/${id}/${title}`) // 编程式导航实现params的方式传递参数
   // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)//push跳转实现传递search参数
   // this.props.history.push(`/home/message/detail`,{id,title})//push跳转实现传递state参数
  }
  replaceShow=(id,title)=>{
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
  back=()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件中传递params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  {/* 向路由组件中传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                  {/* 向路由组件传递state参数 */}
                  {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                  <button onClick={()=>{this.pushShow(msgObj.id,msgObj.title)}}>push查看</button>
                  {/* 写成高阶函数的形式 */}
                  <button onClick={()=>{this.replaceShow(msgObj.id,msgObj.title)}}>replace查看</button><br /><br />
                </li>
              )
            })
          }
        </ul>
        <button onClick={this.forward}>前进</button>&nbsp;&nbsp;<button onClick={this.back}>后退</button>

        <hr />
        {/* 声明接收到的params参数 */}
        <Route  path="/home/message/detail/:id/:title" component={Detail} />
        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        {/* state参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
      </div>

    )
  }
}
