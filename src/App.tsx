import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" toastOptions={{
        style: {
          background: "#171717",
          color: "#fff",
          borderRadius: "0.5rem",
        },
        success: {
          style: {
            background: "var(--color-primary)",
            color: "#000",
          },
        },
      }} />
    </>
  );
}