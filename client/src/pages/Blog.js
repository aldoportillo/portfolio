import React from 'react'

export default function Blog() {

    const [backendData, setBackendData] = React.useState([{}])

    React.useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(backendData)
            }
        )
    }, [])

    
  return (
    <>
    <div>Blog</div>

     {(typeof backendData.randomArr === 'undefined') ? (
        <p>Loading...</p>
    ): (
        // backendData.randomArr.map((val, i) => {
        //     <p key={i}>{val}</p>
        // })
        <p>{backendData.randomArr}</p>
    )} 
    </>
  )
}
