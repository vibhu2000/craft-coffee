import React, { useState } from 'react';
import './RewardsPage.css';

const RewardsPage = () => {
  const [points, setPoints] = useState(120); // Assume 120 points as an example
  const [rewards, setRewards] = useState([
    {
      id: 1,
      name: 'Free Small Coffee',
      pointsRequired: 50,
      description: 'Redeem 50 points for a free small coffee.',
    },
    {
      id: 2,
      name: '50% Off Any Pastry',
      pointsRequired: 80,
      description: 'Get 50% off any pastry with 80 points.',
    },
    {
      id: 3,
      name: 'Free Coffee Mug',
      pointsRequired: 150,
      description: 'Redeem 150 points to get a Craft Coffee mug.',
    },
  ]);

  const handleRedeem = (reward) => {
    if (points >= reward.pointsRequired) {
      setPoints((prevPoints) => prevPoints - reward.pointsRequired);
      alert(`You have successfully redeemed: ${reward.name}`);
    } else {
      alert('You do not have enough points to redeem this reward.');
    }
  };

  return (
    <div className="rewards-page">
      {/* Loyalty Points Overview */}
      <section className="points-overview">
        <h1>Your Rewards</h1>
        <p>You have <strong>{points}</strong> loyalty points.</p>
      </section>

      {/* Rewards List */}
      <section className="rewards-list">
        <h2>Available Rewards</h2>
        <div className="rewards-grid">
          {rewards.map((reward) => (
            <div key={reward.id} className="reward-card">
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
              <p>Points Required: <strong>{reward.pointsRequired}</strong></p>
              <button onClick={() => handleRedeem(reward)}>
                Redeem
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;
