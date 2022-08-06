import React, { useEffect, useState } from 'react'
import './Button.css'

export const Button = ({data}) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        data.cart = value < 0? 0: value; 
    },[value])

  return (
    <div style={{display: 'flex'}}>
        <button type='button' className='button button__mins' onClick={() => setValue(value-1)}>-</button>
        <button type='button' className='button__num'>{value}</button>
        <button type='button' className='button button__plus' onClick={() => setValue(value+1)}>+</button>
    </div>
  )
}
