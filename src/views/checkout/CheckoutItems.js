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
import { useStateValue } from "states/StateProvider";

function CheckoutItems({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="mt-4">
      <Row>
        <Col className="mt-3" xs={12} md={6}>
          <CardImg top width="100%" src={image} className="checkout-img mr-3" />
        </Col>
        <Col className="mt-3" xs={12} md={6}>
          <div className="">
            <h1>{title}</h1>
            <p>{price}</p>
            <p>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span className="fa fa-star"></span>
                ))}
            </p>
            <Button onClick={removeFromCart} color="primary">
              Remove from cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutItems;
