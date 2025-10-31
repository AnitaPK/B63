import React, { useContext } from "react";
import useCustomAPI from "../hooks/useCustomAPI";
import ThemeContext from "../hooks/ThemeContext";

const ProductList = () => {
  const{theme} = useContext(ThemeContext)

  const { products, loading, error } = useCustomAPI(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <div className="spinner-border" role="status"></div>;
  if (error) return <p>Error while getting products...{error.message}</p>;
// console.log(products)


  return (
    <div>
      <h3>Product List</h3>
      <div className="container">
        <div className="row">
            {products ? <>
             {products.map((prod, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div class={`card mb-3 ${theme == 'light' ? 'bg-light' : 'bg-secondary'}`} style={{ "max-width": "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={prod.image} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{prod.title}</h5>
                      <p class="card-text">
                        {prod.description.slice(0,50)}...
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </> : <>Error</>}
         
        </div>
      </div>
    </div>
  );
};

export default ProductList;
