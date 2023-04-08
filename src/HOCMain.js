import React, { useState } from 'react'

function HOCMain(WrappedComponent) {
    function Test(){
        const [Count,setCounter] = useState(0)
        function incra(){
            setCounter(Count+1)
        }
        function decra(){
            setCounter(Count+1)
        }
    return(
        <WrappedComponent Counter = {Count} Add = {incra}/>
    )
    }
    return Test
}

export default HOCMain