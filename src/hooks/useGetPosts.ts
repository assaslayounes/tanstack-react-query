import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TPost, TPostStatus } from "../types";


const fetchPosts = async (selectedPostStatus: TPostStatus, paginate: number): Promise<TPost[]> => {
  if (selectedPostStatus === "all") {
    const result = await axios.get<TPost[]>(`http://localhost:5000/posts?_page=${paginate}&_limit=5`);
    return result.data;
  }
  const result = await axios.get<TPost[]>(`http://localhost:5000/posts?status=${selectedPostStatus}`);
  return result.data;
}
const useGetPosts = (selectedPostStatus: TPostStatus, paginate: number): UseQueryResult<TPost[]> => {

  return useQuery({
    queryKey: ["getPosts", { selectedPostStatus, paginate }],
    queryFn: () => fetchPosts(selectedPostStatus, paginate),
    staleTime: 1000 * 60 * 2, // 5 soeconds
    refetchInterval: 1000 * 60 * 4,
  });

}

export default useGetPosts