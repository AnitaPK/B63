import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCustomAPI from '../hooks/useCustomAPI';
import  ThemeContext from '../hooks/ThemeContext';
import { CartContext } from '../hooks/CartContext';
import { FaArrowLeft } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { addToCart, cart } = useContext(CartContext);
  const { products: product, loading, error } = useCustomAPI(
    `https://fakestoreapi.com/products/${id}`
  );

  // Image preview state
  const [selectedImage, setSelectedImage] = useState(null);

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-danger text-center mt-5">
        Error fetching product details: {error.message}
      </p>
    );

  if (!product)
    return <p className="text-center mt-5">No product details found.</p>;

  // Duplicate the same image to create a mini gallery look
  const galleryImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div
      className={`container mt-5 p-4 rounded shadow ${
        theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
      style={{ maxWidth: '1000px' }}
    >
      {/* Back Button */}
      <button
        className={`btn btn-sm mb-3 ${
          theme === 'dark' ? 'btn-light' : 'btn-secondary'
        }`}
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="me-2" />
        Back
      </button>

      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={selectedImage || product.image}
            alt={product.title}
            className="img-fluid rounded border mb-3"
            style={{
              height: '350px',
              width: '100%',
              objectFit: 'contain',
              background: '#fff',
            }}
          />

          {/* Thumbnail Gallery */}
          <div className="d-flex justify-content-center gap-2">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="rounded border"
                style={{
                  height: '70px',
                  width: '70px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  border:
                    selectedImage === img
                      ? '3px solid #007bff'
                      : '1px solid #ccc',
                  background: '#fff',
                }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h3>{product.title}</h3>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-success">${product.price}</h4>
          <p className="mt-3">{product.description}</p>

          <div className="d-flex align-items-center mb-3">
            <span className="me-2 fw-bold">Rating:</span>
            <span>
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          {isInCart ? (
            <button className="btn btn-danger" disabled>
              Already in Cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
