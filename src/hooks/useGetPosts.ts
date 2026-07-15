import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TPost, TPostStatus } from "../types";


const fetchPosts = async (selectedPostStatus: TPostStatus): Promise<TPost[]> => {
  if (selectedPostStatus === "all") {
    const result = await axios.get<TPost[]>("http://localhost:5000/posts");
    return result.data;
  }
  const result = await axios.get<TPost[]>(`http://localhost:5000/posts?status=${selectedPostStatus}`);
  return result.data;
}
const useGetPosts = (selectedPostStatus: TPostStatus):UseQueryResult<TPost[]> => {

  return useQuery({
    queryKey: ["getPosts", selectedPostStatus],
    queryFn: () => fetchPosts(selectedPostStatus) ,
    staleTime: 1000 *  5, // 5 soeconds
  });

}

export default useGetPosts