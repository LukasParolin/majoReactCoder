import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
    console.log("se ejecuta el submit");
    console.log(userInfo);
  };

  const capturaDatos = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="nombre..."
          name="nombre"
          onChange={capturaDatos}
        />
        <input
          type="text"
          placeholder="email..."
          name="email"
          onChange={capturaDatos}
        />
        <input
          type="text"
          placeholder="telefono..."
          name="telefono"
          onChange={capturaDatos}
        />
        <button>comprar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
