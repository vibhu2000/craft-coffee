import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Coffee Lane, Bean City',
  });

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: '2024-08-15', items: 'Latte, Cappuccino', total: '$10.50' },
    { id: 2, date: '2024-08-20', items: 'Espresso, Americano', total: '$8.00' },
  ]);

  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdateInfo = () => {
    // Implement the logic to update user information
    alert('User information updated successfully!');
  };

  const handleChangePassword = () => {
    // Implement the logic to change the password
    alert('Password changed successfully!');
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <section className="user-info">
        <h2>User Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleUpdateInfo}>Update Info</button>
      </section>

      <section className="order-history">
        <h2>Order History</h2>
        <ul>
          {orderHistory.map((order) => (
            <li key={order.id}>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Items:</strong> {order.items}</p>
              <p><strong>Total:</strong> {order.total}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="change-password">
        <h2>Change Password</h2>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button onClick={handleChangePassword}>Change Password</button>
      </section>
    </div>
  );
};

export default ProfilePage;
