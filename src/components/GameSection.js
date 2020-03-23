import React from "react";

const GameSection = () => (
  <div className="container-fluid game-container nav-margin game flex-wrap">
    <div className="col-md-6 ">
      <iframe
        src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fnlt4oErCtgSMi0UWUsmNuQS0aMV2%2Fcontent%2F87147999-c95a-bc59-5cf2-cdeb761e1a2a&imagePath=screens/9.png"
        style={{ width: 720, height: 540, border: 0 }}
      ></iframe>
    </div>

    <div className="right game-text col-md-5 align-middle">
      <h1 className="text-center">SPACE VOID</h1>
      <br />
      <p>
        A simple breakout-style game developed as an exercise from the Unity 2D
        and C# course from GameDev.TV.
      </p>
      <p>
        After finishing the project, as a personal challenge to learn more
        about, new functionalities were developed such as: drop system with
        buff/debuff items; start game screen with 2D rain inspired in a{" "}
        <a href="https://youtu.be/KkyIDI6rQJI" target="_blank">
          Coding Train video
        </a>
        .
        <br />
        <br />
        <h4 className="text-center">
          <a
            href="https://github.com/gabrielbrise/unity-rain-2D"
            target="_blank"
          >
            2D rain github code repository
          </a>
        </h4>
      </p>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default GameSection;
