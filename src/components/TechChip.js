import React from "react";

import "./tech-chip.scss";

export default function TechChip({ techName }) {
  return <span className="chip tech-chip">{techName}</span>;
}