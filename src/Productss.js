import React from 'react'

export default function Productss(props) {
  return (

      <div className=' col-md-4' >
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <p>{props.price}</p>
            </div>
   
  )
}
