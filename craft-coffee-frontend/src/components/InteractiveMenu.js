import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InteractiveMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu data from the backend API
    axios.get('/api/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu data:', error));
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveMenu;
