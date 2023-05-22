import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const SignOut = () => {
  const navigate = useNavigate();
  const { signout, setEmail } = useContext(AuthContext);

  useEffect(() => {
    handleSignOut();
  }, []);

  const handleSignOut = async () => {
    signout();
    setEmail("");
    navigate("/");
  };
};

export default SignOut;
