import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, user, error };
}
