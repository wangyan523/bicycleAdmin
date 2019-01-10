import React, { Component, Fragment } from 'react'
import Auth from './renderProps'

class WithComponent extends Component { 
  render() { 
    return (
      <Fragment>
        <Auth
          login={({userName}) => <h1>Hello {userName}</h1>}
          nologin={() => <h1>Please login</h1>}
        />
      </Fragment>
    )
  }
}

const RenderAll = (props) => { 
  return (
    <Fragment>
      {props.children(props)}
    </Fragment>
  )
}

function composee(...funcs) {
  if (funcs.length === 0) {
    return arg => arg 
  }
  if (funcs.length === 1) { 
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const WithLoginAndLogout = (ComponentForLogin, ComponentForLogout) => { 
  let NewComponent = (props) => { 
    if (getUser()) {
      return <ComponentForLogin {...props} />
    } else { 
      return <ComponentForLogout {...props}/>
    }
  }
  return NewComponent
}

const WithLogin = (Component) => { 
  let NewComponent = (props) => { 
    if (getUser()) {
      return <Component {...props} />
    } else { 
      return <h1>null</h1>
    }
  }
  return NewComponent
}

const LogoutButton = WithLogin((props) => { 
  return <button>退出登录</button>
})

const Shopping = WithLogin((props) => { 
  return <div>购物车</div>
})

const getUser = () => { 
  return 1
}

export default WithComponent