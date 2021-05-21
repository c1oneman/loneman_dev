import React, { useState } from "react";
import "../App.css";
import Card from "./card.js";

import { ContentView } from "../styled-components/structure";

function Portfolio() {
  const portfolioData = require("../data/portfolioData");
  const [showAll, changeShowAll] = useState(true);
  const perPage = 3;
  const [projects] = useState(portfolioData.portfolioData);

  const toggleShowAll = () => {
    changeShowAll(!showAll);
  };

  return (
    <div className="darkSection">
      <ContentView>
        {showAll
          ? projects
              .slice(0, perPage)
              .map((project, index) => (
                <Card key={`card-${index}`} project={project} />
              ))
          : projects.map((project, index) => (
              <Card key={`card-${index}`} project={project} />
            ))}
      </ContentView>
      <ContentView>
        {!showAll ? (
          <a
            className="button"
            href="https://github.com/c1oneman"
            target="_blank"
            rel="noopener noreferrer"
          >
            View <span className="bold">Github</span>
          </a>
        ) : (
          <button className="button" onClick={toggleShowAll}>
            View <span className="bold">{showAll ? "More" : "Github"}</span>
          </button>
        )}
      </ContentView>
    </div>
  );
}

export default Portfolio;
