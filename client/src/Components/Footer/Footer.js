import React from "react";
import "./Footer.css";

export default function Footer() {

  const bubbles = [];
  for (let i = 0; i < 128; i++) {
    bubbles.push(
      <div
        className="bubble"
        key={i}
        style={{
          "--size": `${2 + Math.random() * 4}rem`,
          "--distance": `${6 + Math.random() * 4}rem`,
          "--position": `${-5 + Math.random() * 110}%`,
          "--time": `${2 + Math.random() * 2}s`,
          "--delay": `${-1 * (2 + Math.random() * 2)}s`,
        }}
      />
    )};

  return (
    <div className="main">
      <div className="footer">
        <div class="container">
          <a href="https://discord.gg/fRgWtfj2wd" target="_blank" rel="noreferrer"><i class="fa-brands fa-discord discord"></i></a>
          <a href="https://twitter.com/OryonMerch" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter twitter"></i></a>
          <a href="https://www.instagram.com/loic_dlugosz" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram instagram"></i></a>
        </div>
        <div className="bubbles">
          {bubbles}
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

