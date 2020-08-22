import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Overlay from "../components/Overlay";
import TechChip from "../components/TechChip";
import "./project.scss";
import testProjectImage from "../assets/project-tippify.png"

export default function Project() {
    return(
        <Overlay>
        <div className="project-page"
        >

        <div className="header">
        <button className="btn btn-primary btn-sm">
        <FontAwesomeIcon icon="caret-left" />
        </button>
        <button className="btn btn-sm">
        <FontAwesomeIcon icon="eye" />
        </button>
        </div>

        <div className="divider"></div>
          <h1 className="h3 mb-1">Project title</h1>
          <div className="text-gray mb-2">
          <FontAwesomeIcon icon="user" /> john doe
          </div>
          <p>
          It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <div className="columns mb-2">
            <div className="column col-sm-12 col-6 p-centered">
                <img src={testProjectImage} className="img-responsive" />
            </div>
          </div>
          <div className="mt-2 pt-2 text-center">
          {"react, vue, mongo".split(", ").map(techName => <TechChip techName={techName} />)}
          </div>
        </div>
      </Overlay>
    );
}