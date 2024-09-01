import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonalizedRecommendations = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${userId}/recommendations`)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, [userId]);

  return (
    <div className="recommendations">
      <h2>Recommended for You</h2>
      <ul>
        {recommendations.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedRecommendations;
