import axios from "axios";
import { useAuthContext } from "./useAuthContext";
// import { backendApi } from "../utils";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const backendApi = process.env.REACT_APP_backend_url;

  const logout = async (token) => {
    try {
      //const token = localStorage.getItem("user");
      const response = await axios.post(`${backendApi}/users/logout`, {
        token: token,
      });
      //remove user from storage
      localStorage.removeItem("user");
      //console.log("LOGOUT RESPONSE: ", response);
      //dispatch logout action
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("LOGOUT RESPONSE ERRORS:", error);
    }
  };

  return { logout };
};
