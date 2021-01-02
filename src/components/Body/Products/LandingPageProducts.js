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
} from "reactstrap";
import { useStateValue } from "states/StateProvider";

function LandingPageProducts({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log(cart);
  const addToCart = () => {
    // onClick dispatch to the datalayer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <Col>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardBody>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span className="fa fa-star"></span>
              ))}
          </CardBody>
          <Button onClick={addToCart}>Add to cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default LandingPageProducts;
