import React, { PureComponent } from "react";
import classNames from "classnames";
import styled from "styled-components";

const navLinks = [
  {
    text: "about me",
    href: "/"
  },
  {
    text: "software",
    href: "/software"
  },
  {
    text: "architecture",
    href: "/architecture"
  },
  {
    text: "art",
    href: "/art"
  },
  {
    text: "UI / UX",
    href: "/ui-ux"
  },
  {
    text: "game dev",
    href: "/game"
  }
];

export default class NavBar extends PureComponent {
  state = {
    active: "/"
  };

  componentDidMount = () => this.setState({ active: window.location.pathname });

  render = () => (
    <Container>
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src="img/logo.png"
            height="50"
            className="d-inline-block align-middle"
            alt=""
          />
          <div className="logo_text align-middle">BRISE</div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map(({ text, href }, key) => (
              <li
                className={classNames("nav-item zoom-in", {
                  active: this.state.active === href
                })}
                key={`nav-link-${key}`}
              >
                <a className="nav-link" href={href}>
                  {text}
                  {this.state.active === href && (
                    <span className="sr-only">(current)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <ul
            className="nav justify-content-end collapse navbar-collapse"
            id="navbarNav"
          >
            <li className="nav-item link_icon">
              <a href="https://www.behance.net/gabriel_ns">
                <span className="fab fa-behance" aria-hidden="true"></span>
              </a>
            </li>
            <li className="nav-item link_icon">
              <a href="https://www.linkedin.com/in/gabrielbrise/">
                <span className="fab fa-linkedin" aria-hidden="true"></span>
              </a>
            </li>
            <li className="nav-item link_icon">
              <a href="https://github.com/gabrielbrise">
                <span className="fab fa-github" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  nav {
    -webkit-box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.25);
  }
`;
