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
  <CardStyled href={href} target="_blank">
    <div
      className="Image"
      style={{ backgroundImage: `url(${image})` }}
      alt={title}
    />
    <div class="card-title">
      <h4>{title}</h4>
    </div>
  </CardStyled>
);

const CardStyled = styled.a`
  position: relative;
  flex-shrink: 1;
  max-width: 320px;
  min-width: 320px;
  display: flex;
  justify-content: center;

  :hover {
    filter: grayscale(100%);

    .card-title {
      opacity: 0.5;
      border-radius: 4px;
      transition: opacity 0.5s;
    }
  }
  .Image {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 200px;
  }
  .card-title {
    opacity: 0.5;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: #333;
    h4 {
      position: absolute;
      text-align: center;
      padding: 0 5px 0 5px;
      bottom: 5px;
      color: #fff;
      width: 100%;
    }
    @media (min-width: 960px) {
      opacity: 0;
    }
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
