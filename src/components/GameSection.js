import React from "react";

const GameSection = () => (
  <div class="container-fluid game-container nav-margin game flex-wrap">
    <div class="col-md-6 ">
      <iframe
        src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fnlt4oErCtgSMi0UWUsmNuQS0aMV2%2Fcontent%2F87147999-c95a-bc59-5cf2-cdeb761e1a2a&imagePath=screens/9.png"
        style={{ width: 720, height: 540, border: 0 }}
      ></iframe>
    </div>

    <div class="right game-text col-md-5 align-middle">
      <h1 class="text-center">Space Void</h1>
      <br />
      <p>
        Um simples jogo "breakout-style" que foi desenvolvido como parte do
        curso de Unity e C# da GameDev.TV.
      </p>
      <p>
        Após concluir o exercício, como forma de fixar o conhecimento foram
        desenvolvidas algumas funcionalidades extras, como o sistema de "drops"
        e a tela inicial com o efeito de chuva 2D cujo código pode ser conferido{" "}
        <a
          class="text-light"
          href="https://github.com/gabrielbrise/unity-rain-2D"
        >
          <u>aqui em seu repositório no Github</u>
        </a>
        .
      </p>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default GameSection;
