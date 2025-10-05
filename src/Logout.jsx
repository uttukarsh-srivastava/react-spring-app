import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // clear user session
    navigate("/login"); // redirect to login page
  }, [logout, navigate]);

  return (
    <div className="auth-container">
      <h2>Logging out...</h2>
      <p>You are being redirected to the login page.</p>
    </div>
  );
}
