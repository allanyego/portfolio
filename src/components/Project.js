import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import testProjectImage from "../assets/project-tippify.png";
import "./project.scss";

export function Project({ name, client, url, description, technologies }) {
  return (
    <div
      className="column col-xs-12 col-md-6 col-lg-4 col-3"
      style={{
        marginBottom: "0.7em",
      }}
    >
      <div className="card project-card">
        <div className="card-image">
          <img
            src={testProjectImage}
            alt="project"
            className="img-responsive"
          />
          {/* <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray"
          >
            <button className="btn btn-action">
              <FontAwesomeIcon icon="eye" />
            </button>
          </Link> */}
        </div>
        <div className="card-header">
          <div class="card-title h3">
            <strong>{name}</strong>
          </div>
          <div class="card-subtitle h4 text-gray">{client}</div>
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
