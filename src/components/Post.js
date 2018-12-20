import React, { useState } from 'react';
import FavouriteToggle from './FavouriteToggle';
import ScoreCounter from './ScoreCounter'

const Post = ({ data }) => {
  const [isActive, setIsActive] = useState(false)
  const [showBody, setShowBody] = useState(false)
  
  return (<li
    onClick={(e) => {
      if (e.target.id !== 'favorite' && e.target.id !== 'score')
        setShowBody(!showBody)
      }
    }
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
  >
    <ScoreCounter/>
    <span style={{ fontWeight: '900' }} >{data.title}</span>

    <FavouriteToggle isActive={isActive} style={{ float: 'right' }} onClick={() => setIsActive(!isActive)} />
    
    <span style={{ fontWeight: '300' }}>{showBody ? <div>{data.body}</div> : '' }</span>
  </li>)
};

export default Post;
