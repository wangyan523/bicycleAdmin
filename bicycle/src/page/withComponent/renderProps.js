import React, { Component } from 'react'

const Auth= (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    );
  } else {
    <React.Fragment>
      {props.nologout(props)}
    </React.Fragment>
  }
};

const getUserName = () => { 
  return 'wyyyyy'
}

export default Auth