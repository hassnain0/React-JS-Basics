import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Loading } from './Components/Loading';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get('https://api.randomuser.me/?nat=PK&results=2');
      setData(response.data?.results);
      console.log("Data", response.data)
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData()
  };

  return (
    <div className="App">
      <h1>Checking Repository 1</h1>
      {loading ? (
        <Loading />
      ) : (

        data.map((res, index) => (
          <div key={index}>
            <br />
            <span>Gender: {res.gender}</span>
            <br />
            <span>Title :{res.name.title}</span>
            <br />
            <span>{res.name.first} {res.name.last}</span>

          </div>
        ))

      )}
      <form onSubmit={handleSubmit}>
        <input type='submit' value='load users' />
      </form>

    </div>
  );
}

export default App;
