import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const backendApi = process.env.REACT_APP_backend_url;

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    //console.log(backendApi);

    try {
      const response = await axios.post(`${backendApi}/users/login`, {
        email,
        password,
      });
      // console.log(JSON.stringify(response.data));
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: JSON.stringify(response.data) });
        setIsLoading(false);
        navigate("/");
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        //console.log("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //console.log(error);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
