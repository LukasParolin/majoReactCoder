import React from 'react';
import Item from './Item';
import '../style/style.css';

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <section>
        <Item title="Mermeladas Gourmet" description="Descubre nuestras mermeladas con sabores únicos." />
        <Item title="Jugos Naturales" description="Frescos y naturales para tu día a día." />
        <Item title="Pastas Gourmet" description="Calidad y sabor para los paladares más exigentes." />
        <Item title="Mermeladas Protein" description="La mezcla perfecta de sabor y proteína." />
      </section>
    </div>
  );
}

export default ItemListContainer;