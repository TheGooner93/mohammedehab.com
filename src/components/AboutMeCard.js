import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const AboutMeCard = () => {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "500px",
        borderRadius: "10px"
      }}
    >
      <Card bg="warning" text="white">
        <Card.Body>
          <Card.Title>I am also...</Card.Title>
          <ListGroup>
            <ListGroup.Item variant="warning">
              {" "}
              An Information Science Engineering Graduate from Bangalore, India.{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              {" "}
              A Fullstack Developer at saal.ai , Abu Dhabi, UAE.
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              {" "}
              A lover of building great UIs primarily using ReactJS, NodeJS and
              GatsbyJS!
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMeCard;
