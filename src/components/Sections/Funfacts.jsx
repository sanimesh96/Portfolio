import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Hrs on Spotify",
    count: 57628,
    icon: "icon-equalizer",
  },
  {
    id: 2,
    title: "Hrs in CSGO",
    count: 2765,
    icon: "icon-game-controller",
  },
  {
    id: 3,
    title: "Leetcode Problems",
    count: 285,
    icon: "icon-emotsmile",
  },
  {
    id: 4,
    title: "Hackathon Finalists",
    count: 6,
    icon: "icon-trophy",
  },
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50 justify-content-center d-flex">
        {funfactData.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
