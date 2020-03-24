import React from "react";
import styled from "styled-components";

const CardBoard = ({ cards = [] }) => (
  <Container>
    {cards.map((card, key) => (
      <Card {...card} key={`card-${key}`} />
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
    <div className="card-title">
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
  max-height: 210px;

  :hover {
    filter: grayscale(100%);
    .card-title {
      opacity: 1;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 4px;
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
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;

    h4 {
      position: absolute;
      text-align: center;
      padding: 0 5px 0 5px;
      bottom: 5px;
      color: #333;
      width: 100%;
    }
    @media (min-width: 960px) {
      opacity: 0;
      h4 {
        color: white;
      }
    }
  }
`;

const Container = styled.section`
  padding: 12px calc(50vw - 600px);
  vertical-align: middle;
  height: calc(100vh - 110px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
