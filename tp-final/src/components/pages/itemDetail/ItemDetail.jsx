import { useEffect, useState } from "react";
// import { products } from "../../../products";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); // un objeto --> propiedad : valor

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsColection = collection(db, "products");
    let refDoc = doc(productsColection, id);

    getDoc(refDoc).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{
          width: "200px",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
