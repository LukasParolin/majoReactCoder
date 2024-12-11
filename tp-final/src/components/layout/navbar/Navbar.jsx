import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className={"container-navbar navbar"}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/do6ortuty/image/upload/v1733780813/Logo_TuMajo_Blanco_te2ghw.png"
            alt=""
            style={{
              width: "200px",
              marginTop: "20px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link style={{ listStyle: "none" }} to="/">
            Todas
          </Link>
          <Link style={{ listStyle: "none" }} to="/category/sin azucar">
            sin azucar
          </Link>
          <Link style={{ listStyle: "none" }} to="/category/pastas">
            pastas
          </Link>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
