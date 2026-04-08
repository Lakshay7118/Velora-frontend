import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // 🔴 Not logged in → redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Logged in → allow access
  return children;
}

export default ProtectedRoute;
