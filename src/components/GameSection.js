import React from "react";
import styled from "styled-components";

const GameSection = () => (
  <Container>
    <GameSectionText />
    <GameSectionPlay />
  </Container>
);

const GameSectionText = () => (
  <div className="game-text align-middle" style={{ maxHeight: 380 }}>
    <h1 className="text-center pt-4 pb-2">SPACE VOID</h1>
    <p>
      A simple breakout-style game developed as an exercise from the Unity 2D
      and C# course from GameDev.TV.
    </p>
    <br />
    <p>
      After finishing the project, as a personal challenge to learn more about,
      new functionalities were developed such as: drop system with buff/debuff
      items; start game screen with 2D rain inspired in a{" "}
      <a href="https://youtu.be/KkyIDI6rQJI" target="_blank">
        Coding Train video
      </a>
      .
      <br />
      <br />
      <h4 className="text-center">
        <a href="https://github.com/gabrielbrise/unity-rain-2D" target="_blank">
          2D rain github code repository
        </a>
      </h4>
    </p>
    <br />
    <br />
    <br />
  </div>
);

const GameSectionPlay = () => (
  <div className="text-center pb-5">
    <iframe src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fnlt4oErCtgSMi0UWUsmNuQS0aMV2%2Fcontent%2F87147999-c95a-bc59-5cf2-cdeb761e1a2a&amp;imagePath=screens/9.png"></iframe>
  </div>
);

const Container = styled.section`
  min-height: calc(100vh - 75px);
  background-color: #2d2d2d;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    max-width: 600px;
    margin: auto;
    /* text-align: center; */
  }

  iframe {
    border: 0;
    margin: auto;
    width: 90vmin;
    height: 67.5vmin;
  }
  @media (min-width: 960px) {
    iframe {
      width: 720px;
      height: 540px;
    }
  }
`;

export default GameSection;
