import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Image,
} from "reactstrap";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div>
      <IndexNavbar />
      <div className="section section-basic mt-5">
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={8}>
              <div className="d-flex">
                <Row>
                  <Col className="mt-3" xs={12} md={6}>
                    <CardImg
                      top
                      width="100%"
                      src="https://picsum.photos/500/300"
                      className="checkout-img mr-3"
                    />
                  </Col>
                  <Col className="mt-3" xs={12} md={6}>
                    <div className="">
                      <h1>hi there</h1>
                      <p>$99.99</p>
                      <p>
                        <span className="fa fa-star"></span>
                      </p>
                      <Button color="primary">Remove from cart</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} md={4} className="mt-5">
              <Subtotal />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Checkout;
