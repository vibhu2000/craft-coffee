import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const featuredItems = [
    {
      id: 1,
      name: 'Caramel Macchiato',
      description: 'Rich espresso, steamed milk, and caramel drizzle.',
      price: '$4.75',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Iced Mocha',
      description: 'Chilled espresso with chocolate and milk over ice.',
      price: '$4.50',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Classic Cappuccino',
      description: 'A classic Italian coffee with steamed milk foam.',
      price: '$3.75',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Craft Coffee</h1>
        <p>Experience the best coffee in town, crafted just for you.</p>
        <button onClick={() => window.location.href = '/menu'}>Explore Menu</button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button onClick={() => alert(`Added ${item.name} to cart!`)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Craft Coffee, we believe in serving the highest quality coffee
          made with passion and precision. Join us for an unforgettable coffee experience.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Join Us</h2>
        <p>Sign up for our loyalty program and earn rewards with every cup!</p>
        <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
      </section>
    </div>
  );
};

export default HomePage;
