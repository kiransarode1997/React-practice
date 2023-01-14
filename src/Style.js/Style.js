import React from 'react'
import "./Style.css"
import Piant from "./Custom.module.css"

const Style = () => {
  return (
    <div className='primary'>
    <div style={{"backgroundColor":"yellow","color":"steelblue"}}>Style</div>
    <div>Style</div>
    <div className={Piant.success}>Style</div>
    </div>)
}

export default Style