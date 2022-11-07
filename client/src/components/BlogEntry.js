import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogEntry({title, content }) {

  const renderContent = content.map( type => {
    if( type.includes('jpeg')){
      return <img src={type} />
    } else if (typeof(type) === 'string') {
      return <p>{type}</p>
      
    }
  })
  return (
    <div className='blog-entry'>
        <h3>{title}</h3>
        <div>{renderContent}</div>
        <Link to="/blog"><button>Back to blogs page</button></Link>
    </div>

    
  )
}
