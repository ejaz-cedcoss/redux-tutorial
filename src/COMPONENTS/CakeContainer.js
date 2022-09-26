import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../REDUX'



const CakeContainer = (props) => {
  return (
    <div>
       <h2>Number of cakes:~{props.numOfCakes}</h2>
       <button onClick={props.buyCake} style={{padding:"15px 25px",fontSize:"22px",fontWeight:"bold"}}>Buy a cakes</button>

    </div>
  )
}

const mapStateToProps = state =>{
  return{
    numOfCakes:state.cake.numOfCakes
  }
}

const mapDispatchProps = dispatch =>{
  return{
    buyCake: () =>{
      dispatch(buyCake())
    }
  }
}



export default connect (mapStateToProps,mapDispatchProps)(CakeContainer) 
