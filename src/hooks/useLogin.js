import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({email, password}) => apiLogin({email, password}),
    onSuccess: (user) => {
      localStorage.setItem('user', JSON.stringify(user.userID));
      navigate(`/user/${user.userID}`, { replace: true });
    },
    onError:(err) => {
      console.log("ERROR", err)
      toast.error("Provided email or password are incorrect")
    }
  });

  return { login, isLogging };
}


