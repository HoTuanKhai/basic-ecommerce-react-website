import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";

import './App.css';
import AuthProvider from './context/AuthProvider';
import ProductDetails from './pages/ProductDetails';
import CartProvider from './context/CartProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
