import React from 'react'
import MajorClock from './MajorClock'

const SplitTimes = ({ value = [] }) => { 
  return value.map((v, k) => { 
    return <MajorClock key={k} milliseconds={v}/>
  })
}

export default SplitTimes