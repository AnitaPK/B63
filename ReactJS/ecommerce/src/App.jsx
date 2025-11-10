import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import CartPage from "./pages/Cart";
import { useRef, useState } from "react";
import ThemeProvider from "./hooks/ThemeProvider";
import CartProvider from "./hooks/CartProvider";
import ProductDetails from "./components/ProductDetails";
import BestSellers from "./components/BestSellers";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const highestProdRef = useRef(null);
  const goToTopRef = useRef(null)

  function GotoHighestSProd() {
    highestProdRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function GotoTopFunc(){
    goToTopRef.current.scrollIntoView()
  }
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <div ref={goToTopRef}></div>
          <Navbar
            setIsLoggedIn={setIsLoggedIn}
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
          />
          <Routes>
            <Route
              path="/"
              element={<Dashboard onApplyClick={GotoHighestSProd} />}
            ></Route>
            <Route
              path="/login"
              element={
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  setLoggedUser={setLoggedUser}
                />
              }
            ></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/prodDetail/:id" element={<ProductDetails />}></Route>
          </Routes>
          <div ref={highestProdRef}>
            <BestSellers />
          </div>
          <div
            style={{
              backgroundColor: "red",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              textAlign: "center",
              paddingTop: "20px",
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: "100",
            }}
            onClick={GotoTopFunc}
          >
            Top
          </div>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
