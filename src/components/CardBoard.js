import React from "react";
import styled from "styled-components";

const CardBoard = ({ cards = [] }) => (
  <Container>
    {cards.map(card => (
      <Card {...card} />
    ))}
  </Container>
);

export default CardBoard;

const Card = ({ title, href, image }) => (
  <CardStyled>
    <a href={href} target="_blank">
      <img src={image} alt="" height="200px" width="200px" />
    </a>
    <div class="card-title">
      <h4>{title}</h4>
    </div>
  </CardStyled>
);

const CardStyled = styled.div`
  position: relative;
  flex-shrink: 1;
  max-width: 300px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  :hover {
    .card-title {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }
  a img {
    justify-content: center;
  }
  a {
    display: flex;
    justify-content: center;
  }
  .card-title {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      #202020,
      transparent 25%,
      transparent 100%,
      transparent 100%
    );
    h4 {
      position: absolute;
      text-align: center;
      padding: 0 5px 0 5px;
      bottom: 5px;
      color: #fff;
      width: 100%;
    }
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
