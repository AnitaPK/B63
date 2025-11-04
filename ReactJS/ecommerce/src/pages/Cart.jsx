import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import { FaTrash } from "react-icons/fa";
import ThemeContext from "../hooks/ThemeContext";


const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);


  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
   <div
      className={`container mt-4 py-4 rounded ${
        theme === "light" ? "bg-white text-dark" : "bg-secondary text-light"
      }`}
    >
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center p-5">
          <h5>Your cart is empty 😢</h5>
          <p>Add some products to see them here.</p>
        </div>
      ) : (
        <>
          <table  className={`table table-bordered align-middle ${
              theme === "light" ? "table-light" : "table-dark"
            }`}>
            <thead className={`${
                theme === "light" ? "table-secondary" : "table-light text-dark"
              }`}>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price ($)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end mt-3">
            <h4>
              Total:{" "}
              <span className={` ${
        theme === "light" ? "text-success" : "text-light"
      }`}>${totalPrice.toFixed(2)}</span>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
