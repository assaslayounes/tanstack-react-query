
import { Table, Form, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetPosts from "../hooks/useGetPosts";
import useSearch from "../hooks/useSearch";
import { TPostStatus } from "../types";
import { useState } from "react";

interface PostListProps {
    selectedPostStatus: TPostStatus;
    searchQuery: string;
}
const PostList = ({ selectedPostStatus, searchQuery }: PostListProps) => {

    const [paginate, setPaginate] = useState(1);
    const { data, isLoading, isError, error, isStale, refetch } = useGetPosts(selectedPostStatus,paginate);
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
            {isStale && searchQuery.length === 0 && (<Button variant="success" className="mb-3" onClick={() => refetch()}>Refresh</Button>)}
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
            {searchQuery?.length === 0 && selectedPostStatus === "all" && (
                <div className="d-flex justify-content-center">
                    <ButtonGroup aria-label="Basic example" className="mb-3">
                        <Button variant={paginate === 1 ? "primary" : "secondary"} onClick={() => setPaginate(1)}>1</Button>
                        <Button variant={paginate === 2 ? "primary" : "secondary"} onClick={() => setPaginate(2)}>2</Button>
                        <Button variant={paginate === 3 ? "primary" : "secondary"} onClick={() => setPaginate(3)}>3</Button>
                    </ButtonGroup>
                </div>
            )}
        </>
    )
}
export default PostList