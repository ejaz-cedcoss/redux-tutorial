import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BuyIcecream } from '../REDUX'



export const IcecreamContainer = () => {
    const no_of_icecream = useSelector(state=>state.icecream.noOfIcecream)
    const dispatch = useDispatch()
  return (
    <div>
         <h2>no of Icecream :~{no_of_icecream} </h2>
         <button onClick={()=>{dispatch(BuyIcecream)}}>buy a Icecream :~ {}</button>
    </div>
  )
}


