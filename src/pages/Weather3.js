import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import four from "../assets/fourseasons.png";
import GetData from "../hooks/getData";

const Weather3 = () => {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData] =
    GetData();
  return (
    <Container fluid>
      <Row className="justify-content-center py-5 ">
        <Col className="text-center" sm={12} style={{ color: "#B3C8CF" }}>
          <h1>Weather App</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={10}>
          <Card style={{ background: "#EEEEEE" }}>
            <Card.Img variant="top" src={four} style={{ height: "12rem" }} />
            <Card.Body>
              <div className="search">
                <input
                  type="text"
                  value={saerchCity}
                  placeholder="Enter city/town..."
                  onChange={(e) => setsSaerchCity(e.target.value)}
                />

                <button onClick={fetchData}>Search</button>
              </div>
              {loading && <h1>Loading....</h1>}
              {data ? (
                <div>
                  {/* <Card.Title>Result Of : {data.name}</Card.Title> */}
                  <p className="card-subtitle city-name">
                    <span className="city-name">Results for : </span>
                    {data.name} {data.sys.country}
                  </p>
                  <p>
                    <span className="data">Temp :</span> {data.main.temp} °C
                  </p>
                  <p>
                    <span className="data">Humidity :</span>{" "}
                    {data.main.humidity} %
                  </p>

                  <p>
                    <span className="data">Condtion :</span>{" "}
                    {data.weather[0].description}
                  </p>
                </div>
              ) : error ? (
                <h3 style={{ color: "red" }}>
                  There Is no City With This Name, Inter a Valid City Name
                </h3>
              ) : (
                <p></p>
              )}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather3;
