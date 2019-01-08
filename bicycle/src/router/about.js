import React, {Component} from 'react';

function NoneState(props) {
  console.log(props)
  return(
    <div>
      <div>{props.children}</div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  )
}

class Abox extends Component{
  render() {
    return (
      <div>aaa</div>
    )
  }
}

class Bbox extends Component{
  render() {
    return (
      <div>bbb</div>
    )
  }
}

function About () {
  return (
    <div>
      <NoneState
        left = {
          <Abox/>
        }
        right = {
          <Bbox/>
        }
      />
      <NoneState>
        <p>hello,world</p>
      </NoneState>
    </div>
  )
}

export default About;








