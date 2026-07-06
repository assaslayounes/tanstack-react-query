

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <Container>
      <NavBar />
      <div className="mt-5">
        <Outlet />
      </div>
    </Container>
  );
};

export default Main;
