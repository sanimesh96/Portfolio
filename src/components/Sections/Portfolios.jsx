import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Branding",
  },
  {
    id: 3,
    name: "Creative",
  },
  {
    id: 4,
    name: "Design",
  },
  {
    id: 5,
    name: "Art",
  },
];

const allData = [
  {
    id: 1,
    name: "Prescriptor",
    category: ["creative"],
    image: "images/portfolio/prescriptor.jpeg",
    slug: "creative-art",
    github : "https://github.com/sanimesh96/Prescriptor",
    skils : ["Django", "AWS"]
  },
  {
    id: 2,
    name: "Aperture",
    category: ["creative", "design"],
    image: "images/portfolio/aperture.jpeg",
    slug: "apple-usb",
    github : "https://github.com/KamaljeetSahoo/Project-Aperture",
    skils : ["Django", "Azure"]
  },
  {
    id: 3,
    name: "Omniverse",
    category: ["branding"],
    image: "images/portfolio/omniverse.jpeg",
    slug: "work-space",
    github : "https://github.com/KamaljeetSahoo/Project-Omniverse",
    skils : ["Django", "Unity"]
  },
  {
    id: 4,
    name: "CoVid-19 Detection",
    category: ["creative"],
    image: "images/portfolio/covid19.jpeg",
    slug: "creative-bulb",
    github : "https://github.com/sanimesh96/CoVID-Dection-From-XRays",
    skils : ["Django", "PyTorch"]
  },
  {
    id: 5,
    name: "Text to HandWritting",
    category: ["branding", "art"],
    image: "images/portfolio/t2h.jpeg",
    slug: "iphone-8",
    github : "https://github.com/KamaljeetSahoo/Text-To-Handwriting",
    skils : ["Django", "OpenCV"]
  },
  {
    id: 6,
    name: "Object Tracking(Open CV)",
    category: ["design", "creative"],
    image: "images/portfolio/objectdet.jpeg",
    slug: "minimal-art",
    github : "https://github.com/sanimesh96/Object-Tracking-OpenCV",
    skils : ["PyQt", "OpenCV"]

  },
  // {
  //   id: 7,
  //   name: "Creative Art",
  //   category: ["creative"],
  //   image: "images/portfolio/1.jpg",
  //   slug: "creative-art",
  //   github : ""
  // },
  // {
  //   id: 8,
  //   name: "Apple USB",
  //   category: ["creative", "design"],
  //   image: "images/portfolio/2.jpg",
  //   slug: "apple-usb",
  //   github : ""
  // },
  // {
  //   id: 9,
  //   name: "Work Space",
  //   category: ["branding"],
  //   image: "images/portfolio/3.jpg",
  //   slug: "work-space",
  //   github : ""
  // },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline d-none">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4 d-none">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
