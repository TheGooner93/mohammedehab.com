import React from "react"
import { Link } from "gatsby"
import { Carousel, CarouselItem } from "react-bootstrap"

const RoleCarousel = () => (
  <div
    style={{
      margin: "auto",
      maxWidth: "300px",
      background: "red",
      borderRadius: "10px",
    }}
  >
    <Carousel indicators={false} interval="3000">
      <CarouselItem>
        <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>
          <h3>developer</h3>
        </Link>
      </CarouselItem>
      <CarouselItem>
        <Link to="/blogs" style={{ color: "white", textDecoration: "none" }}>
          <h3>photoblogger</h3>
        </Link>
      </CarouselItem>
    </Carousel>
  </div>
)

export default RoleCarousel