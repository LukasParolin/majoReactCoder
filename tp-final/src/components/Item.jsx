import React from 'react';
import '../style/style.css';

function Item({ title, description }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Item;