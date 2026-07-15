
import { Table, Form, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetPosts from "../hooks/useGetPosts";
import useSearch from "../hooks/useSearch";
import { TPostStatus } from "../types";

interface PostListProps {
    selectedPostStatus: TPostStatus;
    searchQuery: string;
}
const PostList = ({ selectedPostStatus, searchQuery }: PostListProps) => {

    const { data, isLoading, isError, error } = useGetPosts(selectedPostStatus);
    const { data: searchData, isLoading: isSearchLoading, isError: isSearchError, error: searchError } = useSearch(searchQuery);

    console.log("PostList - searchQuery", searchQuery);

    if (isLoading || isSearchLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (isSearchError) {
        return <div>Error: {searchError.message}</div>;
    }


    return (

        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th style={{ width: "10%" }}>Top Rate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {searchQuery?.length === 0 && data?.map((post, index) => (
                        <tr key={post.id}>
                            <td>{++index}</td>
                            <td>
                                <Link to="/info">{post.title}</Link>
                            </td>
                            <td>{post.status}</td>
                            <td style={{ textAlign: "center" }}>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    checked={post.topRate}
                                />
                            </td>
                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger">Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                    {searchQuery?.length > 0 && searchData?.map((post, index) => (
                        <tr key={post.id}>
                            <td>{++index}</td>
                            <td>
                                <Link to="/info">{post.title}</Link>
                            </td>
                            <td>{post.status}</td>
                            <td style={{ textAlign: "center" }}>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    checked={post.topRate}
                                />
                            </td>
                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="danger">Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}
export default PostList