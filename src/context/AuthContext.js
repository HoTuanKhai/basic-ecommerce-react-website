import { createContext, useContext } from "react";

// 1. Tạo khuôn (Context)
export const AuthContext = createContext(null);

// 2. Tạo công cụ lấy dữ liệu (Hook)
export function useAuth() {
  return useContext(AuthContext);
}