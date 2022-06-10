import React, { Component } from 'react'
import { Route, Switch,Redirect} from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/>  
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 在React中靠路由链接实现切换组件 */}
                <MyNavLink to="/about">about</MyNavLink>
                <MyNavLink to="/home">home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Switch>
                    <Route path="/about" component={About} />
                    {/* 开启精准匹配--exact */}
                    <Route path="/home" component={Home} />
                    {/* 路由的重定向 */}
                    <Redirect to="/about"/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
