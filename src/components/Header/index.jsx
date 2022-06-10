import React, { Component } from 'react'
// 加工一般组件使之具备路由组件所特有的API------------withRouter
import {withRouter} from 'react-router-dom'
class Header extends Component {
  forward=()=>{
    this.props.history.goForward()
  }
  back=()=>{
    this.props.history.goBack()
  }
  render() {
    return (

        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2>
            <button onClick={this.forward}>前进</button>&nbsp;&nbsp;<button onClick={this.back}>后退</button>
            </div>
          </div>
        </div>
   


    )
  }
}
export default withRouter(Header)
