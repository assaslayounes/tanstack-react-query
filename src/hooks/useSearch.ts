
import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TPost } from "../types";


const fetchPosts = async (q: string): Promise<TPost[]> => {
  const result = await axios.get<TPost[]>(`http://localhost:5000/posts?q=${q}`);
  //const result = await axios.get<TPost[]>(`http://localhost:5000/posts?q=published`);
  return result.data;
}


const useSearch = (q: string): UseQueryResult<TPost[]> => {

  // console.log("useSearch - searchQuery", q);
  //console.log("useSearch - searchQuery", fetchPosts(q));

  return useQuery({
    queryKey: ["getPosts", "search", { q }],
    queryFn: () => fetchPosts(q),
    staleTime: 1000 * 60 * 5, // 5 soeconds
  });

}

export default useSearch;
