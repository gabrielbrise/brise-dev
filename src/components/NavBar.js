import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
    <a className="navbar-brand" href="/index">
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
        <li className="nav-item active zoom-in">
          <a className="nav-link" href="/index">
            sobre mim <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item zoom-in">
          <a className="nav-link" href="/architecture">
            arquitetura e urbanismo
          </a>
        </li>
        <li className="nav-item zoom-in">
          <a className="nav-link" href="/art">
            arte gráfica
          </a>
        </li>
        <li className="nav-item zoom-in">
          <a className="nav-link" href="/ui-ux.html">
            UI / UX
          </a>
        </li>
        <li className="nav-item zoom-in">
          <a className="nav-link" href="/game-design.html">
            game dev
          </a>
        </li>
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
);

export default NavBar;
