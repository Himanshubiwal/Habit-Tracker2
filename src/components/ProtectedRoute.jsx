import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = document.cookie;
  
  if (!token) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
