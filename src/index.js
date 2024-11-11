import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <h1 className="header-title">
      Andy's Pizza Co.
    </h1>
  );
}

function Pizza({ image, name, description, price }) {
  return (
    <div className="pizza-card">
      <img src={image} alt={name} className="pizza-image" />
      <div className="pizza-details">
        <h3 className="pizza-name">{name}</h3>
        <p className="pizza-description">{description}</p>
        <p className="pizza-price">${price}</p>
      </div>
    </div>
  );
}

function Menu() {
  const pizzas = [
    { image: "pizzas/spinaci.jpg", name: "Spinach Pizza", description: "Tomato, mozzarella, spinach, and ricotta cheese", price: 10 },
    { image: "pizzas/margherita.jpg", name: "Margarita Pizza", description: "Tomato, mozzarella, and basil", price: 12 },
    { image: "pizzas/salamino.jpg", name: "Pepperoni Pizza", description: "Pepperoni, sausage, bacon, and ham", price: 18 },
    { image: "pizzas/funghi.jpg", name: "Mushroom Pizza", description: "Mushroom, mozzarella, garlic, and ham", price: 15 },
    { image: "pizzas/spinaci.jpg", name: "Spinach Pizza", description: "Spinach, mozzarella, garlic, and oregano", price: 15 },
    { image: "pizzas/prosciutto.jpg", name: "Prosciutto Pizza", description: "Prosciutto, Arugula, Cheese", price: 18 }
  ];

  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  return (
    <footer className="footer">
      {hour >= 10 && hour < 22 ? "We're currently open" : "Sorry we're closed"}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
