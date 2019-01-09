import React, { Component, PureComponent, memo } from 'react'

const Joke = memo(({ value }) => { 
  return (
    <div>
      {value || 'loading...'}
    </div>
  )
})

// class Joke extends PureComponent {  //PureComponent浅层比较，不能深层比较
//   render() { 
//     return (
//       <div>
//         {this.props.value || 'loading...'}
//       </div>
//     )
//   }
// }

// const Joke = ({value}) => { 
//   return (
//     <div>
//       {value || 'loading...'}
//     </div>
//   )
// }

export default Joke