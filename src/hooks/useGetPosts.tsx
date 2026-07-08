import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  status: "published" | "draft" | "blocked";
  topRate: boolean;
}

const fetchPosts = async (): Promise<Post[]> => {
  const result = await axios.get<Post[]>("http://localhost:5000/posts");
  return result.data;
}
const useGetPosts = () => {

  return useQuery({
    queryKey: ["getPosts"],
    queryFn: fetchPosts,
    staleTime: 1000 *  5, // 5 soeconds
  });

}

export default useGetPosts