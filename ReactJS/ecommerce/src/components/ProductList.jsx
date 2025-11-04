import React, { useContext, useState, useMemo } from "react";
import useCustomAPI from "../hooks/useCustomAPI";
import ThemeContext from "../hooks/ThemeContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { theme } = useContext(ThemeContext);
  const { products, loading, error } = useCustomAPI("https://fakestoreapi.com/products");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    if (!products) return [];
    const unique = new Set(products.map((item) => item.category));
    return ["All", ...unique];
  }, [products]);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products
      ?.filter((prod) =>
        selectedCategory === "All" ? true : prod.category === selectedCategory
      )
      ?.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [products, search, selectedCategory]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );

  if (error) return <p className="text-danger">Error while getting products... {error.message}</p>;

  return (
    <div className={`container py-4 ${theme === "light" ? "bg-white text-dark" : "bg-secondary text-white"}`}>
      <h3 className="text-center mb-4">🛍️ Product List</h3>

      {/* --- Search and Filter Controls --- */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
        {/* Search Bar */}
        <input
          type="text"
          className={`form-control w-100 w-md-50 ${theme === "light" ? "bg-light" : "bg-secondary text-white"}`}
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "350px" }}
        />

        {/* Category Dropdown */}
        <select
          className={`form-select w-100 w-md-25 ${theme === "light" ? "bg-light" : "bg-secondary text-white"}`}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ maxWidth: "250px" }}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* --- Product Grid --- */}
      <div className="row">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((prod, i) => <ProductCard prod={prod} key={i} />)
        ) : (
          <div className="text-center mt-5">
            <h5>No products found</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
