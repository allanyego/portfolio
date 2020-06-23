import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Project({ name, url, description, technologies }) {
  return (
    <div
      className="column col-xs-12 col-sm-6 col-md-4 col-3"
      style={{
        marginBottom: "0.7em",
      }}
    >
      <div className="card project-card">
        <div className="card-header">
          <h3>{name}</h3>
          <div className="card-subtitle">
            <Link
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray"
            >
              Check it <FontAwesomeIcon icon="external-link-alt" />
            </Link>
          </div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          {technologies.split(", ").map((tech, index) => (
            <TechChip key={tech + index} techName={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechChip({ techName }) {
  return <span className="chip">{techName}</span>;
}
