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
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (2 items) : <strong>$250.96</strong>
            </p>
            <p>
              <input type="checkbox" />
              This order contains a gift
            </p>
            <Button color="primary">Proceed to checkout</Button>
          </>
        )}
        value={0}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
