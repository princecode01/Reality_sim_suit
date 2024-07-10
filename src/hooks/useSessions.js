import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../services/apiUser";

export function useSessions() {
  const {
    isLoading,
    data: sessions,
    error,
  } = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return { isLoading, sessions, error };
}
