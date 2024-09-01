import React, { useState } from 'react';

const RewardsRedemption = ({ points }) => {
  const [redeem, setRedeem] = useState(false);

  const handleRedeem = () => {
    if (points > 0) {
      setRedeem(true);
      // Implement rewards redemption logic
    } else {
      alert('Insufficient points for redemption.');
    }
  };

  return (
    <div className="rewards-redemption">
      <h2>Rewards</h2>
      <p>Your Points: {points}</p>
      <button onClick={handleRedeem}>Redeem Rewards</button>
      {redeem && <p>Rewards redeemed successfully!</p>}
    </div>
  );
};

export default RewardsRedemption;
