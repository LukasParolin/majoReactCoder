import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const elementoEncontrado = products.find((elemento) => elemento.id === id);
    setProduct(elementoEncontrado);
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt="" />
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
