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
import { useStateValue } from "states/StateProvider";
import { getBasketTotal } from "states/reducer";

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items) : <strong>{value}</strong>
            </p>
            <p>
              <input type="checkbox" />
              This order contains a gift
            </p>
            <Button color="primary">Proceed to checkout</Button>
          </>
        )}
        value={getBasketTotal(cart)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
