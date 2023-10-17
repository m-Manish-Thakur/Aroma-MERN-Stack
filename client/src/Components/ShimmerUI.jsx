import React from 'react'
import './Style.css'

const ShimmerUI = () => {
  return (
    <div id='shimmerUI'>
        <div className="image"></div>
        <div className="details" style={{width:'90%'}}></div>
        <div className="details" style={{width:'70%'}}></div>
        <div className="details" style={{width:'90%'}}></div>
    </div>
  )
}

export default ShimmerUI
