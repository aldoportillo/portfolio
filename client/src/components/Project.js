import React from 'react'

export default function Project({name, img, bio, link}) {
  return (
    <div className='project-card'>
        <h4><a href={link}>{name}</a></h4>
        <img src={img} alt=""/>
        <p>{bio}</p>
    </div>
  )
}
