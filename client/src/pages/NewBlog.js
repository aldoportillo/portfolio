import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

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

      <ReactMarkdown
        children={content.body_markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={oneDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }} />
    </div>
  )
}
