import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { questions } from "./questions";
import { axes } from "./axes";
import { useParams } from "react-router-dom";

function Result() {
  const params = useParams();
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={6}>
            <h2>ur results</h2>
            <h3>it says here ur a fucking nonce</h3>
          </Col>
          <Col xs={6}>
            <ListGroup>
              {axes.map((axe, i) => {
                const total =
                  questions.reduce((prev, current) => {
                    return (
                      prev +
                      (current.affect[0] === axe.id
                        ? Math.abs(current.affect[1])
                        : 0)
                    );
                  }, 0) || 1;
                const res = parseFloat(params.data.split(",")[i]);
                return (
                  <ListGroup.Item key={axe.id}>
                    <h3>{axe.name}</h3>
                    <p>{axe.description}</p>
                    <p>
                      <ProgressBar now={((res + total) / (total * 2)) * 100} />
                    </p>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Result;
