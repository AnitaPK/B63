import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../hooks/ThemeContext";
import { CartContext } from "../hooks/CartContext";

const ProductCard = ({ prod }) => {
  const { theme } = useContext(ThemeContext);
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === prod.id);

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div
        className={`card shadow-lg border-0 rounded-4 overflow-hidden ${
          theme === "light" ? "bg-light text-dark" : "bg-dark text-white"
        }`}
        style={{ height: "100%" }}
      >
        <img
          src={prod.image}
          className="card-img-top"
          alt={prod.title}
          style={{
            height: "200px",
            // objectFit: "cover",
            borderBottom: theme === "light" ? "1px solid #ddd" : "1px solid #444",
          }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">
              {prod.description.slice(0, 50)}...
            </p>
          </div>

          <div className="mt-3">
            <Link className="btn btn-warning btn-sm me-2" to={`/prodDetail/${prod.id}`}>
              View Details
            </Link>

            {isInCart ? (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(prod.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm"
                onClick={() => addToCart(prod)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
