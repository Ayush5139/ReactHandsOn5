import React from 'react'
import HOCMain from './HOCMain'

function HOC1(props) {
  console.log(props)
  return (
    <div>
      <h1>
        HOC function
      </h1>
      <h1>{props.Counter}</h1>
      <>
      <button onClick={props.Add}>Icrement !!!</button>
      </>
    </div>
  )
}

export default HOCMain(HOC1)