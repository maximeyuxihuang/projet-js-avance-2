import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import postsMock from './posts-mock';
import { useEffect, useRef, useState } from 'react'


const App = () => {
  const [data, setData] = useState(postsMock)
  let titleRef = useRef()
  let descriptionRef = useRef("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      setData(response)
    })
  }, []);

  const handleSend = () => {
    let nextIndex = 0;
    const userId = 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id >= nextIndex)
        nextIndex = data[i].id + 1
    }

    const newElement = {
      userId,
      id: nextIndex,
      title: titleRef.current.value,
      body: descriptionRef.current.value
    }
    setData(data.concat([newElement]))
    showMessage(false)
    toggleButton(true)
    setTimeout(() => {
      showMessage(true)
      toggleButton(false)
      resetContent()
    }, 3000)
  }

  const resetContent = () => {
    titleRef.current.value = ""
    descriptionRef.current.value = ""
  }

  const toggleButton = (disabled) => {
    document.getElementById("sendButton").disabled = disabled
  }

  const showMessage = (visibility) => {
    document.getElementById("message").hidden = visibility
  }

  return (
    <div>
      <header className="App-header">
        <div>
          <input ref={titleRef} type="text" />
          <input ref={descriptionRef} type="text" />
          <button id="sendButton" type="button" onClick={handleSend}>
            Submit
          </button>
          <text id="message" hidden="true">Successfully added new Post</text>
        </div>
        <PostsList posts={data} />
      </header>
    </div>
  );
};

export default App;
