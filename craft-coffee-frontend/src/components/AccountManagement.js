import React, { useState } from 'react';

const AccountManagement = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update user information API call
  };

  return (
    <div className="account-management">
      <h2>Manage Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={userInfo.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={userInfo.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Update Information</button>
      </form>
    </div>
  );
};

export default AccountManagement;
