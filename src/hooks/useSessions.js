import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../services/apiUser";
import { useParams } from "react-router-dom";

export function useSessions() {
  const { userID } = useParams()

  const {
    isLoading,
    data: sessions,
    error,
  } = useQuery({
    queryKey: ["sessions"],
    queryFn: ()=>getSessions(userID),
  });

  return { isLoading, sessions, error };
}
