import { createContext, useContext } from "react";

// 1. Tạo cái khung chứa giỏ hàng
export const CartContext = createContext();

// 2. Tạo Hook để các file khác gọi dùng cho nhanh
export function useCart() {
  return useContext(CartContext);
}