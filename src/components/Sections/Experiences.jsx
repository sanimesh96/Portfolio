import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Feb - May 2023",
    degree: "Software Developer Intern - Dr.Reddy's Laboratories",
    content:
      `• Implemented a Queue Service using AWS SQS with FASTApi, resulting in a 90% decrease in API failure rates.
        • Incorporated a robust microservices architecture to achieve low latency in APIs using Django and PostgreSQL.
        • Analyzed and optimized backend bottlenecks, including database queries and storage solutions, resulting in a 40%
        improvement in performance.
        • Transformed backend operations, achieving a 60% performance boost by engineering an admin panel with Python and
        React, reducing task completion time and optimizing workflow management.
        • Migrated critical services to AWS Lambda to enhance scalability, streamline resource utilization, and reduce costs.
        • Integrated CI/CD pipelines, Dockerized applications with Dockerfiles, and orchestrated deployment on Kubernetes.
        • Collaborated with the product team to conceptualize, develop, and implement new features, ensuring seamless
        integration and alignment with project goals to enhance overall product functionality and user experience
        • Implemented an innovative prescription digitization service, automating the conversion of handwritten prescriptions into digital forms to significantly reduce manual interpretation time and enhance overall operational efficiency.
        • Spearheaded the development of a cutting-edge prescription digitization system, incorporating custom OCR and NER models, leading to a notable 30% reduction in operating costs by eliminating dependence on AWS services.
        • Designed and implemented a robust backend microservices architecture, adhering to best programming practices, to achieve exceptionally low latency in the developed APIs using Django and Postgresql.`
  },
  {
    id: 1,
    year: "May - Dec 2022",
    degree: "Software Developer Intern - Capgemini",
    content:
      "• Aided in the development of a scalable web application leveraging MERN Stack and AWS; achieved a 50% reduction in loading times and improved user experience, driving a 25% increase in daily active users.\n• Implemented A/B testing using Google Firebase to optimize user experience and inform product decisions.\n• Analyzed user behavior through Firebase Analytics, identifying key areas for improvement that increased user engagement by 25% and reduced churn rate by 15% within three months.\n• Worked closely with product managers and UX designers to iterate on features based on A/B test outcomes",
  },
  {
    id: 1,
    year: "May - July 2022 ",
    degree: "FullStack Developer Intern - Teceads",
    content:
      "• Accompanied in the development of Node.js APIs, lowering the average server response time by 100ms. \n• Created and documented technical specifications for 3+ back-end APIs, facilitating seamless integration.\n• Assisted in the deployment on AWS, achieving 95% uptime on small-sized servers, reducing hosting costs.\n• Aided in the development of a responsive React app, ensuring seamless user experience across devices and screen sizes.• Accompanied in the development of Node.js APIs, lowering the average server response time by 100ms. • Created and documented technical specifications for 3+ back-end APIs, facilitating seamless integration. • Assisted in the deployment on AWS, achieving 95% uptime on small-sized servers, reducing hosting costs. • Aided in the development of a responsive React app, ensuring seamless user experience across devices and screen sizes.",
  },
  {
    id: 1,
    year: "2019 - 2023",
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
