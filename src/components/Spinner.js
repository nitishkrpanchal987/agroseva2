import React from 'react'
import loader from "../media/spinner.gif"

const Spinner = () => {
  return (
    <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', minHeight:'80vh'}}>
      <img src={loader} alt="" style={{textAlign:'center'}}/>
    </div>
  )
}

export default Spinner
