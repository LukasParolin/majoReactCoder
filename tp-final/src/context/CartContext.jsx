import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const resetCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalItems = () => {};

  let data = {
    addToCart,
    cart,
    resetCart,
    deleteById,
    getTotalAmount,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
