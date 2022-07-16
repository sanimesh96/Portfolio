import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2019 - Present",
    degree: "National Institute Of Technology Rourkela",
    content:
      "Pursuing Bachelors Degree from National Institute Of Technology Rourkela",
  },
  {
    id: 2,
    year: "2016 - 2018",
    degree: "DAV Public School CDA",
    content:
      "Completed XIIth Board examinations from CBSE Board",
  },
  {
    id: 3,
    year: "2014-2016",
    degree: "DAV Public School CDA",
    content:
      "Completed Xth Board examinations from CBSE Board",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
