import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import "../style/style.css";

const mockData = [
  {
    id: 1,
    category: "mermeladas",
    title: "Mermeladas Gourmet",
    description: "Descubre nuestras mermeladas con sabores únicos.",
  },
  {
    id: 2,
    category: "jugos",
    title: "Jugos Naturales",
    description: "Frescos y naturales para tu día a día.",
  },
  {
    id: 3,
    category: "pastas",
    title: "Pastas Gourmet",
    description: "Calidad y sabor para los paladares más exigentes.",
  },
  {
    id: 4,
    category: "mermeladas",
    title: "Mermeladas Protein",
    description: "La mezcla perfecta de sabor y proteína.",
  },
];

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const filteredData = categoryId
        ? mockData.filter((item) => item.category === categoryId)
        : mockData;
      setTimeout(() => setItems(filteredData), 500);
    };
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <section>
        {items.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
}

export default ItemListContainer;
