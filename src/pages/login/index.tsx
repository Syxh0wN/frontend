import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginForm } from "../../components/Login";

export const LoginPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/dashboard");
    return null;
  }

  return <LoginForm />;
};
