import { useContext } from "react";
import { Dashboard, Header } from "../../components/Dashboard";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginPage } from "../login";

export const MainDash = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? <Header /> : null}
      {isLoggedIn ? <Dashboard /> : <LoginPage />}
    </>
  );
};
