import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const CardSection = ({ sections }) => (
  <>
    {sections.map((section, index) => (
      <Section {...section} key={`section-${index}`} />
    ))}
  </>
);

export default CardSection;

const isActive = (index, className = "") =>
  index === 0 ? "active " + className : "" + className;

const Section = ({
  title,
  id,
  text,
  theme = {},
  links = [],
  carousel = []
}) => (
  <SectionStyled
    className="container-fluid game game-container flex-wrap"
    style={{ backgroundColor: theme.backgroundColor }}
  >
    <div className="col-sm-12 col-md-6 intro">
      <div
        id={id}
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <ol
          className={classNames("carousel-indicators", {
            "icon-dark": theme.carousel === "dark"
          })}
        >
          {carousel.map((_, index) => (
            <li
              key={`slide-bar-${index}`}
              data-target={`#${id}`}
              data-slide-to={index}
              className={isActive(index)}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {carousel.map(({ image, alt = "" }, index) => (
            <CarouselCard
              image={image}
              alt={alt}
              index={index}
              key={`carousel-card-${index}`}
            />
          ))}
        </div>
        <a
          className={classNames("carousel-control-prev", {
            "icon-dark": theme.carousel === "dark"
          })}
          href={`#${id}`}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className={classNames("carousel-control-next", {
            "icon-dark": theme.carousel === "dark"
          })}
          href={`#${id}`}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div
      className="game-text col-md-6 col-sm-12 FadeIn "
      style={{ color: theme.color }}
    >
      <h1 className="text-center">{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: text
        }}
      ></div>
      {links.map(({ text, href, target }, index) => (
        <h4 className="text-center" key={`link-${id}-${index}`}>
          <a href={href} target={target}>
            {text}
          </a>
        </h4>
      ))}
    </div>
  </SectionStyled>
);

const SectionStyled = styled.section`
  @media (min-width: 960px) {
    min-height: 700px;
  }
  .FadeIn {
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-duration: 3s;
    animation-name: fadein;
    animation-iteration-count: 1;
  }
`;

const CarouselCard = ({ image, alt, index }) => (
  <CarouselCardStyled className={isActive(index, "carousel-item")}>
    <a href={image} style={{ backgroundImage: `url(${image})` }} alt={alt}></a>
  </CarouselCardStyled>
);

const CarouselCardStyled = styled.div`
  max-height: 600px;
  margin: auto;
  a {
    display: block;
    width: 30vw;
    height: 50vh;
    margin: auto;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
