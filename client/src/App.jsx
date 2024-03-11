import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import HospitalInfo from "./pages/HospitalInfo.jsx";
import Cart from "./pages/Cart.jsx";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext.jsx";
import OrderConfirm from "./components/OrderConfirm.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <>
      <div className="app mesh-bg">
        <ShopContextProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirm" element={<OrderConfirm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/hospitals" element={<HospitalInfo />} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
