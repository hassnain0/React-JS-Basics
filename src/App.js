import React, {useEffect, useState } from 'react'


const App = () => {
const [news,setNews]=useState([]);
useEffect(()=>{
fetchNews();  
})

const fetchNews=async()=>{
await fetch('http://hn.algolia.com/api/v1/search?query=react')
.then(res=>res.json())
.then(data=>setNews(data.hits))
.catch(error=>console.log(error))
}
  return (
    <div>
      <span>{news.map((index,data)=>{
        <p key={index}>{data.title}</p>

      })}</span>
    </div>
  )
}

export default App