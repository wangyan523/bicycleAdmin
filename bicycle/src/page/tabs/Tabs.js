import React, { Component, Fragment } from 'react'

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  render() {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({ activeIndex: index })
        })
      } else { 
        return child
      }
    })
    return (
      <Fragment>
        {newChildren}
      </Fragment>
    )
  }
}

export default Tabs