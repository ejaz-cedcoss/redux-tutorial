import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../REDUX'

const HookCakeContainer = () => {
    const no_of_cake = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>number of cakes using hook:~{no_of_cake}</h2>
        <button onClick={()=>dispatch(buyCake())}>buy cake</button>
    </div>
  )
}

export default HookCakeContainer
