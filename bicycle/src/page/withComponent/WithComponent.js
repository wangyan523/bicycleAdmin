import React, { Component,Fragment } from 'react'

class WithComponent extends Component { 
  render() { 
    return (
      <Fragment>
        <LogoutButton />
        <Shopping />
      </Fragment>
    )
  }
}

const WithLogin = (Component) => { 
  const NewComponent = (props) => { 
    if (getUser()) {
      return <Component {...props}/>
    } else { 
      return <h1>null</h1>
    }
  }
  return NewComponent
}

const LogoutButton = WithLogin(() => { 
  return <button>退出登录</button>
})

const Shopping = WithLogin(() => { 
  return <p>hhh</p>
})

const getUser = () => { 
  return 1
}

export default WithComponent