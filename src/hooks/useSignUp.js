import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignUp } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isLoading: isSigningUp } = useMutation({
    mutationFn: apiSignUp,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
    onError:(error)=>{
      console.log('error',error)
    }
  });

  return { signUp, isSigningUp };
}
