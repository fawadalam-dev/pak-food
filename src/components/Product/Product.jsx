import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  const products = [
    {
      title: "Buner Chapli Kebab",
      description: "A spicy, flavorful kebab made with premium beef and traditional spices.",
    },
    {
      title: "Peshawari Karahi",
      description: "Rich and aromatic karahi cooked in a thick tomato and spice gravy.",
    },
    {
      title: "Sajji Special",
      description: "Slow-roasted whole chicken seasoned with salt and native herbs.",
    },
  ];

  return (
    <section className="product-page">
      <div className="product-hero">
        <h1>Featured Products</h1>
        <p>Discover our best food items and recipe favorites from Buner Recipes.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.title}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </article>
        ))}
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
