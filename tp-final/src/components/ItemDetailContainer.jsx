import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const product = mockData.find((item) => item.id === parseInt(productId));
      setTimeout(() => setProduct(product), 500);
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
