import React from "react";
import styled from "styled-components";

const AboutMe = ({ title, text }) => {
  return (
    <Container className="container-fluid nav-margin">
      <div className="row me_body">
        <div className="row bio-intro">
          <div className="about-me col-md-8 col-lg-9 col-sm-12 d-flex align-items-center">
            <div className="jumbotron about-me align-middle ">
              <h1 className="display-4 hi FadeIn">{title}</h1>
              <p
                className="lead FadeIn"
                text-align="center"
                dangerouslySetInnerHTML={{
                  __html: text,
                }}
              />
            </div>
          </div>

          <div className="me-body col-md-4 col-lg-3 d-none d-sm-flex d-lg-flex">
            <div className="d-flex align-items-end">
              <img
                src="img/me_body.jpg"
                className="img-fluid me-body FadeIn"
                alt="Responsive image"
              />
            </div>
          </div>
          <div className="me-small d-block d-sm-none">
            <img
              src="img/me_small.png"
              className="img-fluid rounded-circle align-middle"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;

const Container = styled.section`
  background-color: #e5e4ea;
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
  .about-me {
    background-color: #e5e4ea;
    align-content: center;
    text-align: center;
    padding: 25px;
    margin-bottom: 0;
    font-size: 1em;
    margin: auto;
    p {
      font-size: 1em;
      max-width: 800px;
    }
  }

  .me-body {
    background-color: #e5e4ea;
  }
`;
