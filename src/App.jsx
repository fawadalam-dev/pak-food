import HeroSection from "./components/Hero-section";
import Login from "./components/Login";
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;