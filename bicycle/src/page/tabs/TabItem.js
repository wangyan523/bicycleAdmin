import React, { Component } from 'react'

const TabItem = (props) => { 
  const { active, onClick } = props
  const activeStyle = {
    'maxWidth': '150px',
    'textAlign': 'center',
    color: active ? 'skyblue' : 'pink',
    border: active ? '1px solid skyblue' : '0px'
  }
  return (
    <h1 style={activeStyle} onClick={onClick}>
      {props.children}
    </h1>
  )
}

export default TabItem