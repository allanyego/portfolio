import React, { useEffect } from "react";
import { Frame, useCycle } from "framer";

export const SkillCards = () => {
  const [img, cycle] = useCycle("java", "js", "python", "go");

  useEffect(() => {
    const interval = setInterval(() => {
      cycle();
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="columns"
      style={{
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Frame
        className="column col-4"
        style={{
          backgroundColor: "#fff !important",
        }}
      >
        <img
          src={`img/${img}.png`}
          className="img-cover-fit"
          alt=""
        />
      </Frame>
    </div>
  );
};
