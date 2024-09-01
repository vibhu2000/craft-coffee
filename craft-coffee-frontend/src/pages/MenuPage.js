import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      category: 'Espresso',
      name: 'Espresso Shot',
      description: 'A strong and bold shot of pure espresso.',
      price: '$2.50',
    },
    {
      id: 2,
      category: 'Espresso',
      name: 'Double Espresso',
      description: 'Double the richness with two shots of espresso.',
      price: '$3.50',
    },
    {
      id: 3,
      category: 'Lattes',
      name: 'Vanilla Latte',
      description: 'A smooth latte with a hint of vanilla flavor.',
      price: '$4.00',
    },
    {
      id: 4,
      category: 'Cold Brew',
      name: 'Classic Cold Brew',
      description: 'Cold brew coffee, slow-steeped for a refreshing taste.',
      price: '$3.75',
    },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} has been added to your cart.`);
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <div className="menu-categories">
        <h2>Espresso</h2>
        {menuItems
          .filter((item) => item.category === 'Espresso')
          .map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}

        <h2>Lattes</h2>
        {menuItems
          .filter((item) => item.category === 'Lattes')
          .map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}

        <h2>Cold Brew</h2>
        {menuItems
          .filter((item) => item.category === 'Cold Brew')
          .map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuPage;
