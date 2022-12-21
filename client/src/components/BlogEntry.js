import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'

export default function BlogEntry({title, content}) {

  const renderContent = content.map( type => {
    if( type.includes('http') ){
      return <img key={nanoid()} src={type} alt=""/>
    } else {
      return <p key={nanoid()}>{type}</p>
    }
  })

  return (
    <div className='blog-entry'>
        <h3>{title}</h3>
        {renderContent}
        <Link to="/blog"><button>Back to blogs page</button></Link>
    </div>

    
  )
}
