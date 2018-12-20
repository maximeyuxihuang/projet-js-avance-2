import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import postsMock from './posts-mock';
import { useEffect, useState } from 'react'


const App = () => {
  const [data, setData] = useState(postsMock)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      setData(response)
    })
  }, []);

  return (
    <div>
      <header className="App-header">
        <PostsList posts={data} />
      </header>
    </div>
  );
};

export default App;
