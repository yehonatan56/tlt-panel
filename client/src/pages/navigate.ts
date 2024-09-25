import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  return {
    redirect: navigate,
  };
};
export default Navigate;
