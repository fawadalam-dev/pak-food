import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const products = [
  {
    title: "Buner Chapli Kebab",
    description: "A spicy, flavorful kebab made with premium beef and traditional spices.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1571091718767-18d674f9625d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chicken Burger",
    description: "Juicy grilled chicken burger served with fresh lettuce and sauce.",
    price: 9.49,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fried Rice",
    description: "A delicious portion of rice with vegetables, egg, and special seasonings.",
    price: 8.75,
    image:
      "https://images.unsplash.com/photo-1604908177522-1c186b1a58f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Peshawari Karahi",
    description: "Rich and aromatic karahi cooked in a thick tomato and spice gravy.",
    price: 14.5,
    image:
      "https://images.unsplash.com/photo-1604908177522-1c186b1a58f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sajji Special",
    description: "Slow-roasted whole chicken seasoned with salt and native herbs.",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
  },
];

function Product() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [orderMessage, setOrderMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setOrderMessage("");
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.title === product.title);
      if (existing) {
        return currentCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (title, delta) => {
    setOrderMessage("");
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.title === title ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (title) => {
    setOrderMessage("");
    setCart((currentCart) => currentCart.filter((item) => item.title !== title));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      setOrderMessage("Your cart is empty. Add items before checkout.");
      return;
    }

    const message = `Order placed successfully! You chose ${paymentMethod}. Total: $${totalPrice.toFixed(2)}.`;
    setOrderMessage(message);
    setCart([]);
  };

  return (
    <section className="product-page">
      <div className="product-hero">
        <h1>Featured Products</h1>
        <p>Choose your favorites, add them to the cart, and checkout securely.</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="product-layout">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.title}>
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="product-meta">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <button
                  className="add-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="cart-panel">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">No items in the cart yet.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.title, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.title, 1)}>+</button>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.title)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="cart-summary">
            <div className="summary-row">
              <span>Total</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <fieldset className="payment-methods">
              <legend>Payment Method</legend>
              {[
                "Cash on Delivery",
                "Credit/Debit Card",
                "Online Payment",
                "Mobile Wallet",
              ].map((method) => (
                <label key={method} className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  {method}
                </label>
              ))}
            </fieldset>

            <button
              className="checkout-button"
              onClick={placeOrder}
              disabled={cart.length === 0}
            >
              Place Order
            </button>

            {orderMessage && (
              <div className="order-message">{orderMessage}</div>
            )}
          </div>
        </div>
      </div>

      <div className="product-actions">
        <Link to="/" className="product-back-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Product;
