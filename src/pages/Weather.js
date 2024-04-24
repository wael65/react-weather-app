import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import four from "../assets/fourseasons.png";
import sky from "../assets/blue-sky.jpg";
import mostlyCloudy from "../assets/mostly-cloudy.png";

import GetData from "../hooks/getData";
const Weather = () => {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData] =
    GetData();
  return (
    <Container fluid style={{ background: "#EEEEEE" }} className="main-div ">
      <Row className="justify-content-md-center py-5 ">
        <Col sm={7}>
          {/* <h1>Weather App</h1> */}
          <Card>
            {/* <Card.Img src={sky} style={{ height: "480px", width: "1200px" }} /> */}
            <Card.Img src={sky} style={{ height: "30em" }} />

            <Card.ImgOverlay>
              <Card.Title className="text-center">
                <h2 style={{ color: "#EEEEEE", paddingTop: "1em" }}>
                  Weather App
                </h2>
              </Card.Title>
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
                  <div class="row ">
                    <div
                      class="col-8 col-sm-8 "
                      style={{
                        paddingTop: "1em",
                      }}
                    >
                      <div class="row text-center">
                        <div class="col-6 col-sm-6 ">
                          <Image
                            src={mostlyCloudy}
                            class="img-fluid"
                            alt="..."
                            style={{ height: "7em" }}
                          />
                        </div>
                        <div class="col-4 col-sm-4  align-content-center">
                          {" "}
                          <h3
                            className="card-subtitle text-start"
                            style={{
                              color: "#EEEEEE",
                              font: "3em",
                              fontWeight: "bold",
                            }}
                          >
                            {data.name} {data.sys.country}
                          </h3>
                          <h3
                            className="card-subtitle text-start"
                            style={{
                              color: "#EEEEEE",
                              paddingTop: "0.5em",
                              font: "3em",
                              fontWeight: "bold",
                            }}
                          >
                            {data.main.temp} °C
                          </h3>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-12 col-sm-12 ">
                          <h4
                            style={{
                              color: "#EEEEEE",
                              paddingTop: "0.75em",
                              font: "3em",
                              fontWeight: "bold",
                            }}
                          >
                            {data.weather[0].description}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col text-center"
                      style={{
                        paddingTop: "2em",
                      }}
                    >
                      <h6
                        className="card-subtitle "
                        style={{
                          color: "#EEEEEE",
                          paddingTop: "0em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Max : {data.main.temp_max} °C
                      </h6>
                      <h6
                        className="card-subtitle "
                        style={{
                          color: "#EEEEEE",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Min : {data.main.temp_min} °C
                      </h6>
                      <h6
                        className="card-subtitle "
                        style={{
                          color: "#EEEEEE",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Feels Like : {data.main.feels_like} °C
                      </h6>
                      <h6
                        className="card-subtitle "
                        style={{
                          color: "#EEEEEE",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Humidity : {data.main.humidity} %
                      </h6>
                    </div>
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
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
