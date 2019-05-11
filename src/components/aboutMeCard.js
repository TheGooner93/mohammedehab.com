import React from "react"
import { Card, ListGroup } from "react-bootstrap"
const AboutMeCard = () => {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "500px",
        borderRadius: "10px",
      }}
    >
      <Card bg="warning" text="white">
        <Card.Body>
          <Card.Title>A little bit more about me...</Card.Title>
          <ListGroup>
            <ListGroup.Item variant="warning">
              {" "}
              I am an Information Science Engineering graduate from Bangalore,
              India.{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              {" "}
              I worked as a Frontend Developer for SAP Labs India, and I am
              currently a Fullstack Developer at saal.ai , Abu Dhabi.
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              {" "}
              I love building great UIs primarily using ReactJS, NodeJS and
              GatsbyJS!
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AboutMeCard
