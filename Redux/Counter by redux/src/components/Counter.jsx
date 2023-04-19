import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    
   const count = useSelector(state=>state.count)

  return (
      <div>
          
          <h2> Count : { count } </h2>
    </div>
  )
}

export default Counter