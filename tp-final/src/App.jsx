import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Majo, descubre nuestros productos gourmet" />
    </div>
  );
}

export default App;