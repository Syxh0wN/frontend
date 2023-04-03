import { AuthProvider } from "./contexts/AuthContext";
import { MainRoutes } from "./routes/routes";
import Global from "./styles/all/global";

export const App = () => (
  <>
    <Global />
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  </>
);
