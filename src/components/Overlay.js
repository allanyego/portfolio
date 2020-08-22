import React from "react";

import "./overlay.scss";

export default function Overlay({ children }) {
  return <div className="overlay">{children}</div>;
}
