import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // TÌM SẢN PHẨM TRỰC TIẾP TẠI ĐÂY (Thay vì dùng useEffect)
  const product = getProductById(Number(id));

  // Kiểm tra nếu không tìm thấy sản phẩm
  if (!product) {
    return <div className="container">Product not found!</div>;
  }

  return (
    <div className="container page">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">
            {product.description || "No description available."}
          </p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}