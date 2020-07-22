import React from "react";

export const Section = ({ title, children }) => {
  return (
    <section
      style={{
        maxHeight: "100%",
      }}
    >
      <h1>{title}</h1>
      {children}
    </section>
  );
};
