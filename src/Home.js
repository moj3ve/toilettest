import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  return (
    <Jumbotron>
      <h1>welcome to toilet test</h1>
      <p>click on the button, what are u waiting for</p>
      <p>
        <LinkContainer to="/test">
          <Button variant="primary">start test</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
}

export default Home;
