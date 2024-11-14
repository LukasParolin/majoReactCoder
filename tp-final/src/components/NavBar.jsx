import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import '../style/style.css';

function NavBar() {
  return (
    <nav className='navBar' >
      <Logo />
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: '0 15px' }}>Mermeladas Gourmet</li>
        <li style={{ margin: '0 15px' }}>Jugos Naturales</li>
        <li style={{ margin: '0 15px' }}>Pastas Gourmet</li>
        <li style={{ margin: '0 15px' }}>Mermeladas Protein</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;