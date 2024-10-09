import React, { useEffect, useState } from 'react'


const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('react');
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')

  useEffect(() => {
    fetchNews();
  }, [url]) //It handles on which Value change it calls this function

  const fetchNews = async () => {
    setLoading(true);
    //Template String
    await fetch(url)
      .then(res => res.json())
      .then(data => (setNews(data.hits),setLoading(false)))
      .catch(error => console.log(error));

  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=react${query}`)
  }
  return (
    <div>
      {loading ? <h2>Loading...</h2> : ''}
      <h1>News</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      {news.map((n, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          <span>{n.title}</span>

        </div>
      ))}
    </div>
  )
}

export default App;