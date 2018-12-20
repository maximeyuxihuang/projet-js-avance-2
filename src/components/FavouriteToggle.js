import React from 'react';

const FavouriteToggle = ({ isActive = false, style = {}, onClick }) => (
  <span id='favorite' onClick={onClick} style={style}>{isActive ? '♥️' : '♡'}</span>
);

export default FavouriteToggle;
