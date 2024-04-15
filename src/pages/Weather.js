import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import rainy from "../assets/rainy.png";

const Weather = () => {
  return (
    <Container>
      <Row className="py-5 ">
        {/* <Image src={rainy} fluid />; */}
        <Col sm="3" xs="3" md="3">
          <div
            className="card text-center bg-light text-dark"
            style={{ width: "18rem" }}
          >
            <img src={rainy} clasName="card-img-top" alt="..."></img>
            <div div className="card-body">
              <span className="badge bg-secondary">New</span>
              <h5 className="card-title">Card title </h5>
              <p className="card-text">Some quick example text</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
