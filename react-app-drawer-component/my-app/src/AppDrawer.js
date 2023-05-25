import { FaJediOrder } from 'react-icons/fa';
import React, { useState } from 'react';

export default function AppDrawer({ listItems }) {
  const [clicked, setClicked] = useState(true);

  return (
    <>
      <div className="container">
        <div onClick={() => setClicked(!clicked)} className="menu-icon">
          <FaJediOrder />
        </div>
        <div
          onClick={() => setClicked(!clicked)}
          className={clicked ? 'menu-shade' : 'menu-shade is-drawn'}></div>
        <div className={clicked ? 'menu-drawer' : 'menu-drawer is-open'}>
          <h3 className="menu-heading">Star Wars Info</h3>
          <DrawerList listItems={listItems} />
        </div>
      </div>
    </>
  );
}

function DrawerList({ listItems }) {
  const list = listItems.map((item) => (
    <li key={item.number} className="menu-items">
      {item.name}
    </li>
  ));
  return <div>{list}</div>;
}
