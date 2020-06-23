import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Socials.scss";

export default function Socials() {
  return (
    <section className="socials hide-sm">
      <IconLink
        iconName="linkedin"
        link="https://www.linkedin.com/in/yego-allan-8b00258b/"
      />
      <IconLink iconName="github-square" link="https://github.com/yegow" />
      <IconLink
        iconName="hackerrank"
        link="https://www.hackerrank.com/devyego"
      />
    </section>
  );
}

function IconLink({ iconName, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="btn btn-link text-gray"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={["fab", iconName]} />
    </a>
  );
}

