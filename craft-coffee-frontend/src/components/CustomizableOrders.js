import React, { useState } from 'react';

const CustomizableOrders = () => {
  const [order, setOrder] = useState({
    size: 'Medium',
    flavors: [],
    preferences: '',
  });

  const handleSizeChange = (event) => {
    setOrder({ ...order, size: event.target.value });
  };

  const handleFlavorsChange = (event) => {
    const { value, checked } = event.target;
    const newFlavors = checked
      ? [...order.flavors, value]
      : order.flavors.filter(flavor => flavor !== value);
    setOrder({ ...order, flavors: newFlavors });
  };

  const handlePreferencesChange = (event) => {
    setOrder({ ...order, preferences: event.target.value });
  };

  return (
    <div className="customizable-orders">
      <h2>Customize Your Order</h2>
      <div>
        <label>Size: </label>
        <select value={order.size} onChange={handleSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div>
        <label>Flavors: </label>
        <input type="checkbox" value="Vanilla" onChange={handleFlavorsChange} /> Vanilla
        <input type="checkbox" value="Hazelnut" onChange={handleFlavorsChange} /> Hazelnut
        <input type="checkbox" value="Caramel" onChange={handleFlavorsChange} /> Caramel
      </div>
      <div>
        <label>Preferences: </label>
        <textarea value={order.preferences} onChange={handlePreferencesChange} />
      </div>
    </div>
  );
};

export default CustomizableOrders;
