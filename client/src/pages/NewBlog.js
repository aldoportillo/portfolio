import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default function NewBlog() {
    const location = useLocation()
    const {data} = location.state

    const [content, setContent] = React.useState([])

    React.useEffect(( ) => {
        axios.get(`https://dev.to/api/articles/${data.id}`)
        .then(res => {
            setContent(res.data)
        })
    }, [])

  return (
    <div className='blog'>
      <h1>{content.title}</h1>
      <ReactMarkdown children={content.body_markdown} />
    </div>
  )
}
