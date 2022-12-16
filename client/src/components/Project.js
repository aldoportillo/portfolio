import React from 'react'

export default function Project({name, img, bio, link}) {
  return (
    <a href={link} className='project-card' target={"_blank"} rel="noreferrer">
      <img src={img} alt=""/>
      <h4>{name}</h4>
      <p>{bio}</p>
    </a>
  )
}
