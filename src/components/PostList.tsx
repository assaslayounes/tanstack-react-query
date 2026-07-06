
import { Table, Col, Form, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useGetPosts from "../hooks/useGetPosts";
const PostList = () => {

    const { data, isLoading, isError, error } = useGetPosts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (

        <Col xs={9}>
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
                    {data?.map((post, index) => (
                        <tr key={post.id}>
                            <td>{++index}</td>
                            <td>
                                <Link to="/info">{post.title}</Link>
                            </td>
                            <td>{post.status}</td>
                            <td style={{ textAlign: "center" }}>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                /> {post.topRate}
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
        </Col>
    )
}
export default PostList