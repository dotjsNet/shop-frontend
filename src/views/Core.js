/*!

=> Junaid Raza

*/
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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import LandingPageProducts from "components/Body/Products/LandingPageProducts.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";

export default function Core() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />

        <div className="main">
          <div className="section section-basic" id="basic-elements">
            <Container>
              <Row>
                <LandingPageProducts
                  id="1321312"
                  title="The lean startup"
                  price={29.99}
                  image="https://picsum.photos/500/300"
                  rating={5}
                />

                <LandingPageProducts
                  id="1321314"
                  title="The lean startup 2"
                  price={39.99}
                  image="https://picsum.photos/500/300"
                  rating={4}
                />
              </Row>

              <Row>
                <LandingPageProducts
                  id="3423424"
                  title="The lean startup"
                  price={24.99}
                  image="https://picsum.photos/500/300"
                  rating={3}
                />
                <LandingPageProducts
                  id="6546546"
                  title="The lean startup 4"
                  price={59.99}
                  image="https://picsum.photos/500/300"
                  rating={4}
                />
                <LandingPageProducts
                  id="7575665"
                  title="The lean startup 5"
                  price={69.99}
                  image="https://picsum.photos/500/300"
                  rating={5}
                />
              </Row>
              <Row>
                <LandingPageProducts
                  id="564564"
                  title="The lean startup 6"
                  price={69.99}
                  image="https://picsum.photos/500/300"
                  rating={5}
                />
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
