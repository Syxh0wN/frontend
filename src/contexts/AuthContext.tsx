import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iUserLogin, iUserRegister } from "../interfaces/User";
import { api } from "../services/api";
import { iContact } from "../interfaces/Contact";

type iProvProps = {
  children?: React.ReactNode;
};

type AuthContextType = {
  user: { token: string | null };
  isLoggedIn: boolean;
  setToken: (token: string | null) => void;
  userContacts: iContact[];
  setUserContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: { token: null },
  isLoggedIn: false,
  setToken: () => {},
  userContacts: [],
  setUserContacts: () => {},
});

const isTokenValid = (token: string | null): boolean => {
  return !!token;
};

export const AuthProvider = ({ children }: iProvProps) => {
  const [user, setUser] = useState<{ token: string | null }>({ token: null });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userContacts, setUserContacts] = useState<iContact[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const setToken = async (token: string | null) => {
    setUser({ token });
    if (token) {
      localStorage.setItem("userToken", token);
      setIsLoggedIn(true);

      const response = await api.get("/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (Array.isArray(response.data)) {
        setUserContacts(response.data);
      }
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem("userToken");
    }
  };

  useEffect(() => {
    const gtoken = localStorage.getItem("userToken");
    const loggedIn = isTokenValid(gtoken);
    setIsLoggedIn(loggedIn);
    if (!loggedIn && location.pathname === "/") {
      navigate("/login");
    }
  }, [user, navigate, location]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        setToken,
        userContacts,
        setUserContacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const putLogin = async (
  data: iUserLogin,
  setToken: (token: string | null) => void
) => {
  try {
    const email = data.email;
    const password = data.password;
    const response = await api.post("/login", {
      email,
      password,
    });

    if (response.data && response.data.token) {
      setToken(response.data.token);
    } else {
      console.error("Failed to login");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const putRegister = async (
  data: iUserRegister,
  navigate: (path: string) => void
) => {
  try {
    await api.post("/user", data);
    navigate("/login");
  } catch (error) {
    console.error("Error during register:", error);
  }
};
