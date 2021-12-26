import Cookies from "js-cookie";
import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

export interface AuthContextType {
  token: any;
  signin: (user: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [token, setToken] = React.useState<any>(null);

  let signin = (newToken: any, callback: VoidFunction) => {
    setToken(newToken);
    callback();
  };

  let signout = (callback: VoidFunction) => {
    return () => {
      setToken(null);
      callback();
    };
  };

  let value = { token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();
  const cookie = Cookies.get("Token");

  if (cookie) {
    // 쿠키 유요성 검증 로직 추가 필요
    return children;
  }

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
