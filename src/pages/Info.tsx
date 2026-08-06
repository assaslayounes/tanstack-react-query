import { useSearchParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import { Row, Col } from "react-bootstrap"

const Info = () => {
  const [searchParams] = useSearchParams();
  const paramId = searchParams.get("id") as string;
  const paramType = searchParams.get("type") as string;
  const paramKey = searchParams.get("key") as string;
  const { data, isLoading, isError, error } = useGetPost(paramId, paramType, paramKey);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Row>
      <Col lg={12}>
        <h4>Title: {data?.title}</h4>
        <p>Status: {data?.status}</p>
        <p>Top Rate: {data?.topRate ? "Yes" : "No"}</p>
        <p>Body: {data?.body}</p>
        <hr />
        <h4 className="mb-2">Comments:</h4>
        <p>Comment 1</p>
        <p>Comment 2</p>
      </Col>
    </Row>
  );
};

export default Info;
