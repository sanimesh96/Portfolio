import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  skillContent1 :
    "Being a fast learner and having a good grasp on web development fundamentals, I keep myself updated with the new technology stack that comes in the industry.", 
  progressData: [
    {
      id: 1,
      name: "React",
      percentage: 80,
    },
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 90,
    },
    {
      id: 3,
      name: "Django",
      percentage: 75,
    },
    {
      id: 4,
      name: "Node",
      percentage: 90,
    },
    {
      id: 5,
      name: "JavaScript",
      percentage: 85,
    },
    {
      id: 6,
      name: "Python",
      percentage: 85,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent1}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
