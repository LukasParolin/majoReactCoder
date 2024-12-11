import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import "../style/style.css";

function NavBar() {
  return (
    <nav className="navBar">
      <Logo />
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/1">Categoría 1</Link>
        </li>
        <li>
          <Link to="/category/2">Categoría 2</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
