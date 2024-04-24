import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import rainy from "../assets/rainy.png";
import GetData from "../hooks/getData";

const Weather2 = () => {
  const [data, saerchCity, setsSaerchCity, loading, error, fetchData] =
    GetData();
  return (
    <Container fluid>
      <Row className="justify-content-center py-5 ">
        {/* <Image src={rainy} fluid />; */}
        <Col sm={8}>
          <div
            className="card bg-light text-dark"
            // style={{ width: "48rem" }}
          >
            <div className="card-body">
              {/* <span className="badge bg-secondary">New</span> */}
              <h2 className="card-title app-tlite  text-center">
                Weather App{" "}
              </h2>
              <div className="main">
                <div>
                  <input
                    type="text"
                    value={saerchCity}
                    placeholder="Enter city/town..."
                    onChange={(e) => setsSaerchCity(e.target.value)}
                  />

                  <button onClick={fetchData}>Search</button>
                </div>
              </div>

              {/* <h3 className="card-title">{data.name}</h3> */}

              {loading && <h1>Loading....</h1>}
              {data ? (
                <div>
                  <p className="card-subtitle city-name">
                    <span className="data">Results for : </span>
                    {data.name}
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
            </div>
          </div>
        </Col>
        {/* <Col sm={4}>
          <div
            className="card text-center bg-light text-dark"
            // style={{ width: "24rem" }}
          >
            <img src={rainy} className="card-img-top" alt="..."></img>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Weather2;
