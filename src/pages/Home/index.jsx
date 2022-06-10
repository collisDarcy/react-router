import React, { Component } from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
import Message from './Message'
import News from './News'
import MyNavLink from '../../components/MyNavLink'
export default class 我是Home组件 extends Component {
  render() {
    return (
      <div>
        <div>我是Home组件</div>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>

    )
  }
}
