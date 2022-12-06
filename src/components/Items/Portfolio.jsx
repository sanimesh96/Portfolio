import React from "react";

function Portfolio({ portfolio: { id, name, category, image, slug,github,skils } }) {
  return (
    // <a href={`works/${id}/${slug}`}>
    <a href = {github}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term d-none">{category.join(",  ")}</span>
          <span className="term">{skils.join(",  ")}</span>

        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
