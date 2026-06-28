import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = () => {

  const fetchPosts = async () => {
    const result = await axios.get("http://localhost:5000/posts");
    return result.data;
  }

  const query = useQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts
      });

  return query;
  
}

export default useGetPosts