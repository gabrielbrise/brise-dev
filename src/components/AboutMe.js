import React from "react";

const AboutMe = () => (
  <div className="container-fluid nav-margin">
    <div className="row me_body">
      <div className="row bio-intro">
        <div className="about-me col-md-8 col-lg-9 col-sm-12 d-flex align-items-center">
          <div className="jumbotron about-me align-middle">
            <h1 className="display-4 hi fadein">
              Olá! Você pode me chamar de BRISE!
            </h1>
            <br />

            <p
              className="lead intro"
              text-align="center"
              style={{ padding: "0 10% 0 10%" }}
            >
              Me chamo Gabriel, tenho 25 anos, sou recém formado em Arquitetura
              e Urbanismo pela UFRGS e estou interessado em explorar áreas da
              tecnologia onde meus conhecimentos adquiridos ao longo da
              faculdade possam ser aplicados.
              <br />
              <br />
              Ganhei o apelido Brise devido ao primeiro trabalho que apresentei
              na faculdade, onde expliquei o que são os brises (elementos
              arquitetônicos para proteção solar).
              <br />
              <br />
              Atualmente estou fazendo cursos ligados à programação (HTML/CSS,
              python/kivy, C#/Unity e Javascript/React) e gostaria de encontrar
              um ambiente de trabalho para colaborar aplicando o que aprendo.
              Tenho facilidade em resolução de problemas e isso me permite
              aprender novas ferramentas rapidamente.
              <br /> <br />
              Espero que goste dessa página que fiz para exemplificar algumas de
              minhas habilidades!
            </p>
          </div>
        </div>

        <div className="me-body col-md-4 col-lg-3 d-none d-sm-flex d-lg-flex">
          <div className="d-flex align-items-end fadein">
            <img
              src="img/me_body.jpg"
              className="img-fluid me-body"
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
  </div>
);

export default AboutMe;
