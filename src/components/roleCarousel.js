import React from "react"
import { Carousel, CarouselItem } from "react-bootstrap"

const RoleCarousel = () => (
  <div
    style={{
      margin: "auto",
      maxWidth: "300px",
      color: "white",
      background: "red",
      borderRadius: "10px",
    }}
  >
    <Carousel indicators={false} interval="3000">
      <CarouselItem>
        <h3>developer</h3>
      </CarouselItem>
      <CarouselItem>
        <h3>photographer</h3>
      </CarouselItem>
      <CarouselItem>
        <h3>gamer</h3>
      </CarouselItem>
    </Carousel>
  </div>
)

export default RoleCarousel
