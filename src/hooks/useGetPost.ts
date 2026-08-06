import axios from "axios";
import { useQueryClient, useQuery, UseQueryResult } from "@tanstack/react-query";
import { TPost } from "../types";


export const fetchPost = async (id: string): Promise<TPost> => {

    const response = await axios.get<TPost>(`http://localhost:5000/posts/${id}`);
    return response.data;
}
const useGetPost = (id: string, paramType: string, paramKey: string): UseQueryResult<TPost> => {
    const queryClient = useQueryClient();
    let getCashedData: TPost[] | undefined;
    if (paramType === "paginate") {
        getCashedData = queryClient.getQueryData(["getPosts", { paginate: +paramKey, selectedPostStatus: "all" }]);
    }
    else {
        getCashedData = queryClient.getQueryData(["getPosts", "search", { q: paramKey }]);
    }

    return useQuery({
        queryKey: ["post", { id: +id }],
        queryFn: () => fetchPost(id),
        initialData: () => getCashedData?.find((item) => item.id === +id)
    });

}

export default useGetPost