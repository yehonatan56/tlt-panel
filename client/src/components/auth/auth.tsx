import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  children: ReactNode;
}
const Auth = ({ children }: AuthProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/not-allowed");
    }
  }, []);

  return <div>{children}</div>;
};

export default Auth;
