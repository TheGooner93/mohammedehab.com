import React from "react";
import { connect } from 'react-redux';
import { Carousel, CarouselItem } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const RoleCarousel = ({theme = ''}) => (
  <div
    style={{
      margin: "auto",
      maxWidth: "300px",
      background: "red",
      borderRadius: "10px"
    }}
  >
    <Carousel indicators={false} controls={false} interval="3000">
      <CarouselItem>
        <AniLink cover bg={theme === 'night' ? '#2c3e50' : ''} direction="left" to="/projects" style={{ color: "white", textDecoration: "none" }}>
          <h3 style={{ marginBottom: "0.2rem", padding: "0.2rem" }}>
            developer
          </h3>
        </AniLink>
      </CarouselItem>
      <CarouselItem>
        <AniLink cover bg={theme === 'night' ? '#2c3e50' : ''} direction="left" to="/blog" style={{ color: "white", textDecoration: "none" }}>
          <h3 style={{ marginBottom: "0.2rem", padding: "0.2rem" }}>
            photoblogger
          </h3>
        </AniLink>
      </CarouselItem>
    </Carousel>
  </div>
);

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
};

export default connect(mapStateToProps, {})(RoleCarousel);
