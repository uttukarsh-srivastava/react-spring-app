// // AuthContext.jsx
// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [users, setUsers] = useState([]); // simple local "database"

//   // Register new user
//   const register = (name, email, password) => {
//     const newUser = { name, email, password };
//     setUsers((prev) => [...prev, newUser]);
//   };

//   // Login check
//   const login = (email, password) => {
//     const existingUser = users.find(
//       (u) => u.email === email && u.password === password
//     );
//     if (existingUser) {
//       setUser(existingUser);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
    
//   );
// }

// src/AuthContext.jsx

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Register user with backend
  const register = async (name, email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("User registered:", response.data);
      return true;
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      return false;
    }
  };

  // ✅ Login user with backend
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      setUser(response.data); // backend should return user object
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return false;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
