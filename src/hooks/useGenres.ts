import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiClient.get<FetchResponse<Genre>>("/genres");
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGenres;
