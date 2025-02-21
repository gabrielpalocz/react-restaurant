import React from "react";
import { useNavigate } from "react-router-dom";
import restauranfood from "../images/restauranfood.jpg"
import greekSalad from "../images/greek salad.jpg"
import bruchetta from "../images/bruchetta.JPG"
import lemonDessert from "../images/lemon dessert.jpg"


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div >
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text ">
            <h2 className="title">Little Lemon</h2>
            <p className="subtitle">Chicago</p>
            <p className="description">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="button" onClick={() => navigate("/booking")}>Reserve a Table</button>
          </div>
        </div>
      </header>

      <div className="image-section">
        <div className="image-hero-container">
          <img src={restauranfood} alt="Delicious food" className="hero-image" />
        </div>
      </div>

      {/* Specials Section */}
      <section className="specials container">
        <div className="special-header">
          <h3 className="section-title">This week's specials!</h3>
          <button className="button">Online Menu</button>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <div key={item.id} className="special-card">
              <img src={item.image} alt={item.title} className="special-image" />
              <div className="special-container">
                <div className="special-header">
                  <h4 className="special-title">{item.title}</h4>
                  <span className="special-price">${item.price}</span>
                </div>
                <p className="special-description">{item.description}</p>
                <button className="order-button">Order a delivery ⚡</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const specials = [
  {
    id: 1,
    title: "Greek Salad",
    description: "Crispy lettuce, peppers, olives, feta cheese, garlic, and croutons.",
    price: "12.99",
    image: greekSalad,
  },
  {
    id: 2,
    title: "Bruschetta",
    description: "Grilled bread with garlic, salt, and olive oil.",
    price: "5.99",
    image: bruchetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description: "A classic dessert with the freshest ingredients.",
    price: "5.00",
    image: lemonDessert,
  },
];

export default HomePage;