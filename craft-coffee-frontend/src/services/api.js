import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/',
  timeout: 10000,
});

export const fetchMenu = async () => {
  const response = await api.get('/menu');
  return response.data;
};

export const fetchOrderStatus = async (orderId) => {
  const response = await api.get(`/orders/${orderId}/status`);
  return response.data;
};

export const fetchRecommendations = async (userId) => {
  const response = await api.get(`/users/${userId}/recommendations`);
  return response.data;
};

export const updateUserInfo = async (userInfo) => {
  const response = await api.put(`/users/${userInfo.id}`, userInfo);
  return response.data;
};

// Add more API methods as needed
