import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";
import { useParams } from "react-router-dom";

export function useUser() {
  const { userID } = useParams()

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: ()=>getUser(userID),
  });

  return { isLoading, user, error };
}
