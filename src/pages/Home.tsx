
import { useState } from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { TPostStatus } from "../types";
import { Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const [selectedPostStatus, setSelectedPostStatus] = useState<TPostStatus>("all");
  return (
    <Row>
      <PostList  selectedPostStatus={selectedPostStatus} />
      <PostFilter selectedPostStatus={selectedPostStatus} 
                  setSelectedPostStatus={setSelectedPostStatus} 
      />
    </Row>
  );
};

export default Home;
