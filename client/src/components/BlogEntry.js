import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogEntry({title, content}) {

  const renderContent = content.map( type => {
    if( type.includes('http') ){
      return <img src={type} alt=""/>
    } else {
      return <p>{type}</p>
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
