import { useQuery } from "@tanstack/react-query";
import { getStats } from "../services/apiStats";

export function useStats(){
    const {data:stats,isLoading,error}= useQuery({queryKey:["stats"],queryFn:getStats})
    return {stats,isLoading,error};
}