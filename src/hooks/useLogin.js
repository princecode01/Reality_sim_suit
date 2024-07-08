import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: apiLogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/user", { replace: true });
    },
  });

  return { login, isLogging };
}


