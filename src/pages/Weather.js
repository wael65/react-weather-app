import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bg from "../assets/bg-4.png";

import GetData from "../hooks/getData";

const Weather = () => {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData, imags] =
    GetData();

  return (
    <Container fluid style={{ background: "#a09a9f" }} className="main-div ">
      <Row className="justify-content-md-center py-5 ">
        <Col sm={8}>
          <Card>
            <Card.Img src={bg} style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title className="text-center">
                <h1
                  style={{
                    color: "#d86647",
                    textShadow: "1.5px 1.5px #fff",
                    paddingTop: "1em",
                    marginBottom: "0em",
                    fontWeight: "900",
                  }}
                >
                  Weather App
                </h1>
              </Card.Title>
              <Card.Body>
                <div className="search row g-3">
                  <div class="col-3"></div>
                  <div class="col-5">
                    <input
                      type="text"
                      class="form-control"
                      value={saerchCity}
                      placeholder="Inter City Name"
                      onChange={(e) => setsSaerchCity(e.target.value)}
                    />
                  </div>
                  <div class="col-1">
                    <button class="btn btn-primary mb-3" onClick={fetchData}>
                      Search
                    </button>
                  </div>
                  <div class="col-3"></div>
                </div>
                {loading && <h1>Loading....</h1>}
                {data ? (
                  <div class="row ">
                    <div
                      class="col-7 col-sm-7 "
                      style={{
                        paddingTop: "1em",
                      }}
                    >
                      <div class="row text-center">
                        <div
                          class="col-5 col-sm-5"
                          style={{
                            padding: 0,
                          }}
                        >
                          <Image
                            src={imags}
                            // class="img-fluid"
                            alt="..."
                            style={{ height: "7em" }}
                          />
                        </div>
                        <div class="col-5 col-sm-5  align-content-center">
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
                          <div className="d-flex flex-rowd-flex">
                            <h1
                              className="card-subtitle text-start p-2"
                              style={{
                                color: "#EEEEEE",
                                // paddingTop: "0.5em",
                                font: "3em ",
                                fontWeight: "bold",
                              }}
                            >
                              {data.main.temp}
                            </h1>
                            <span
                              className="p-2"
                              style={{
                                color: "#EEEEEE",
                                font: "12px !important",
                                fontWeight: "600 !important",
                              }}
                            >
                              °C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-9 col-sm-9 ">
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
                        <div class="col-3 col-sm-3 "></div>
                      </div>
                    </div>
                    <div
                      className="col-4 "
                      style={{
                        paddingTop: "2em",
                      }}
                    >
                      {" "}
                      <h5
                        className="card-subtitle"
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "0em !important",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Max : {data.main.temp_max}
                        <span> °c</span>
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Temp Min : {data.main.temp_min} °c
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Feels Like : {data.main.feels_like} °c
                      </h5>
                      {/* <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Humidity : {data.main.humidity} %
                      </h5>
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Wind Speed : {data.wind.speed} m/sec
                      </h5> */}
                      <h5
                        className="card-subtitle "
                        style={{
                          color: "#fff",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "1.5em",
                          font: "3em",
                          fontWeight: "bold",
                        }}
                      >
                        Pressure : {data.main.pressure} hPa
                      </h5>
                    </div>
                    {/* <div className="col-1"></div> */}
                  </div>
                ) : error ? (
                  <div class="row ">
                    <div
                      class="col-12 col-sm-12 text-center "
                      style={{
                        paddingTop: "1em",
                      }}
                    >
                      <h3
                        style={{
                          color: "#d86647",
                          textShadow: "1.5px 1.5px #0f0f0f",
                          paddingTop: "0em",
                          marginBottom: "0em",
                          fontWeight: "600",
                        }}
                      >
                        There Is No City With This Name, Inter a Valid City Name
                      </h3>
                    </div>
                  </div>
                ) : null}
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
