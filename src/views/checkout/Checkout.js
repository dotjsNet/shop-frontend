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
import { useStateValue } from "states/StateProvider.js";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems.js";
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div>
      <IndexNavbar />
      <div className="section section-basic mt-5">
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={8}>
              <div className="mt-5">
                {cart.map((item) => (
                  <CheckoutItems
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
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
