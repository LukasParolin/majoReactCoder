import React from "react";
import { Link } from "react-router-dom";

function Item({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/product/${title.toLowerCase().replace(/\s+/g, "")}`}>Ver más</Link>
    </div>
  );
}

export default Item;