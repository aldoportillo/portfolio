import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'

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


    console.log(typeof content.body_html)

  return (
    <div className='blog'>
        {content.body_html}
    </div>
  )
}
