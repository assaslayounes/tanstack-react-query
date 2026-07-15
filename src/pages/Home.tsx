
import { useState } from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { TPostStatus } from "../types";
import { Row, Col } from "react-bootstrap";
import SearchQuery from "../components/SearchQuery";

const Home = () => {
  const [selectedPostStatus, setSelectedPostStatus] = useState<TPostStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  console.log("Home - searchQuery", searchQuery);

  return (
    <Row>
      <Col xs={9}>
        <PostList selectedPostStatus={selectedPostStatus} searchQuery={searchQuery} />
      </Col>
      <Col>
        <SearchQuery searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} />
        <PostFilter selectedPostStatus={selectedPostStatus}
          setSelectedPostStatus={setSelectedPostStatus}
        />
      </Col>
    </Row>
  );
};

export default Home;
