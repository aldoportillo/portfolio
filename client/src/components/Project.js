import React from 'react'

export default function Project({name, img}) {
  return (
    <div className='project-card'>
        <h4>{name}</h4>
        <img src={img} />
    </div>
  )
}
